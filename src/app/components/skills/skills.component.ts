import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

interface SkillCard {
  titleKey: string;
  subtitleKey: string;
  percent: number;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  readonly radius = 44;
  readonly circumference = 2 * Math.PI * this.radius;
  private observer?: IntersectionObserver;
  hasAnimated = false;
  private readonly skillOpenHandler = () => this.triggerAnimation();

  skills: SkillCard[] = [
    {
      titleKey: 'skills.cards.programming.title',
      subtitleKey: 'skills.cards.programming.subtitle',
      percent: 83,
      items: [
        'skills.cards.programming.items.c',
        'skills.cards.programming.items.cpp',
        'skills.cards.programming.items.java',
        'skills.cards.programming.items.dotnet'
      ]
    },
    {
      titleKey: 'skills.cards.serverClient.title',
      subtitleKey: 'skills.cards.serverClient.subtitle',
      percent: 70,
      items: [
        'skills.cards.serverClient.items.js',
        'skills.cards.serverClient.items.jquery',
        'skills.cards.serverClient.items.aspnet',
        'skills.cards.serverClient.items.mvc',
        'skills.cards.serverClient.items.angular'
      ]
    },
    {
      titleKey: 'skills.cards.frontend.title',
      subtitleKey: 'skills.cards.frontend.subtitle',
      percent: 65,
      items: [
        'skills.cards.frontend.items.html',
        'skills.cards.frontend.items.css',
        'skills.cards.frontend.items.bootstrap',
        'skills.cards.frontend.items.responsive'
      ]
    },
    {
      titleKey: 'skills.cards.database.title',
      subtitleKey: 'skills.cards.database.subtitle',
      percent: 60,
      items: [
        'skills.cards.database.items.sqlserver',
        'skills.cards.database.items.oracle',
        'skills.cards.database.items.sqlite'
      ]
    }
  ];

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    const section = this.elRef.nativeElement.querySelector('#skills');
    const scroller = document.querySelector('.content-scroller');
    if (!section) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          this.triggerAnimation();
        }
      },
      {
        root: scroller,
        threshold: 0.25
      }
    );

    this.observer.observe(section);
    window.addEventListener('skill-section-open', this.skillOpenHandler);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    window.removeEventListener('skill-section-open', this.skillOpenHandler);
  }

  getStrokeOffset(percent: number): number {
    const value = this.hasAnimated ? percent : 0;
    return this.circumference - (value / 100) * this.circumference;
  }

  getItemPercent(basePercent: number, index: number, total: number): number {
    if (total <= 1) {
      return basePercent;
    }
    const step = 8;
    const value = basePercent - index * step;
    return Math.max(38, Math.min(100, value));
  }

  private triggerAnimation(): void {
    if (this.hasAnimated) {
      return;
    }

    this.ngZone.run(() => {
      setTimeout(() => {
        this.hasAnimated = true;
        this.cdr.detectChanges();
        this.observer?.disconnect();
      }, 120);
    });
  }
}
