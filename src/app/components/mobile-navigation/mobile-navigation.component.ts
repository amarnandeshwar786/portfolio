import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { LangCode } from '../../i18n/translations';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-mobile-navigation',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.css'
})
export class MobileNavigationComponent {
  isOpen = false;

  constructor(public i18n: I18nService) {}

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  setLang(code: LangCode): void {
    this.i18n.setLang(code);
  }

  navigate(event: Event, sectionId: string): void {
    event.preventDefault();
    const scroller = document.querySelector('.content-scroller') as HTMLElement | null;
    const target = document.getElementById(sectionId);
    if (!scroller || !target) {
      return;
    }

    const isMobile = window.matchMedia('(max-width: 920px)').matches;
    if (isMobile) {
      scroller.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    } else {
      scroller.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
    }
    this.popupSection(target);
    this.updateUrl(sectionId);

    if (sectionId === 'skills') {
      window.dispatchEvent(new CustomEvent('skill-section-open'));
    }

    this.isOpen = false;
  }

  private updateUrl(sectionId: string): void {
    const path = sectionId === 'home' ? '/' : `/${sectionId}`;
    window.history.pushState({}, '', path);
  }

  private popupSection(target: HTMLElement): void {
    target.classList.remove('win-popup');
    void target.offsetWidth;
    target.classList.add('win-popup');
    setTimeout(() => target.classList.remove('win-popup'), 450);
  }
}

