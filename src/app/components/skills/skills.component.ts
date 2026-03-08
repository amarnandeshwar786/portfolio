import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy } from '@angular/core';

interface SkillCard {
  title: string;
  subtitle: string;
  percent: number;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
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
      title: 'Programming Languages',
      subtitle: 'Core development fundamentals',
      percent: 83,
      items: ['C Programming', 'C++', 'Core Java', 'C#/.NET']
    },
    {
      title: 'Server & Client Development',
      subtitle: 'Application logic and web architecture',
      percent: 70,
      items: ['JavaScript', 'jQuery', 'ASP.NET', 'MVC', 'Angular v2+']
    },
    {
      title: 'Frontend Technologies',
      subtitle: 'UI structure and styling',
      percent: 65,
      items: ['HTML5', 'CSS3', 'Bootstrap 3+', 'Responsive UI']
    },
    {
      title: 'Database Technologies',
      subtitle: 'Storage, query, and optimization',
      percent: 60,
      items: ['SQL Server', 'Oracle', 'SQLite']
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
