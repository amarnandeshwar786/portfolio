import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FullImageComponent } from './components/full-image/full-image.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MailToComponent } from './components/mail-to/mail-to.component';
import { MobileNavigationComponent } from './components/mobile-navigation/mobile-navigation.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    SidebarComponent,
    MobileNavigationComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    MailToComponent,
    FullImageComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  isLoaded = false;
  private sectionObserver?: IntersectionObserver;
  private scroller?: HTMLElement;
  private readonly scrollerHandler = () => this.updateScrollProgress();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    document.body.classList.remove('theme-vertical', 'theme-cards', 'theme-topbar', 'theme-rightbar');
    document.body.classList.add('theme-basic');

    setTimeout(() => {
      this.isLoaded = true;
      this.cdr.detectChanges();
      this.openSectionFromUrl();
      this.initInteractions();
    }, 200);
  }

  private openSectionFromUrl(): void {
    const path = window.location.pathname.toLowerCase();
    const sectionId = this.getSectionIdFromPath(path);
    if (!sectionId) {
      return;
    }

    if (sectionId === 'home') {
      return;
    }

    const scroller = document.querySelector('.content-scroller') as HTMLElement | null;
    const target = document.getElementById(sectionId);
    if (!scroller || !target) {
      return;
    }

    const isMobile = window.matchMedia('(max-width: 920px)').matches;
    if (isMobile) {
      scroller.scrollTo({ top: target.offsetTop, behavior: 'auto' });
    } else {
      scroller.scrollTo({ left: target.offsetLeft, behavior: 'auto' });
    }

    if (sectionId === 'skills') {
      window.dispatchEvent(new CustomEvent('skill-section-open'));
    }
  }

  private getSectionIdFromPath(path: string): string {
    switch (path) {
      case '/':
      case '/home':
        return 'home';
      case '/about':
        return 'about';
      case '/skills':
      case '/skill':
        return 'skills';
      case '/projects':
      case '/project':
        return 'projects';
      case '/experience':
      case '/exp':
        return 'exp';
      case '/edu':
      case '/education':
        return 'edu';
      case '/con':
      case '/contact':
        return 'con';
      case '/mail-to':
      case '/mail':
        return 'mail-to';
      default:
        return 'home';
    }
  }

  private initInteractions(): void {
    this.scroller = document.querySelector('.content-scroller') as HTMLElement | null ?? undefined;
    if (!this.scroller) {
      return;
    }

    const sections = Array.from(document.querySelectorAll('.content-wrapper .content[id]')) as HTMLElement[];
    sections.forEach((section) => section.classList.add('section-reveal'));

    this.sectionObserver?.disconnect();
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        let mostVisible: { id: string; ratio: number } | null = null;
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            if (!mostVisible || entry.intersectionRatio > mostVisible.ratio) {
              mostVisible = { id: target.id, ratio: entry.intersectionRatio };
            }
          }
        }
        if (mostVisible?.id) {
          this.setActiveNavigation(mostVisible.id);
        }
      },
      { root: this.scroller, threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((section) => this.sectionObserver?.observe(section));

    this.scroller.addEventListener('scroll', this.scrollerHandler, { passive: true });
    this.updateScrollProgress();
    const initialId = this.getSectionIdFromPath(window.location.pathname.toLowerCase()) || 'home';
    this.setActiveNavigation(initialId);
  }

  private setActiveNavigation(sectionId: string): void {
    const links = document.querySelectorAll('[data-section]');
    links.forEach((link) => {
      const element = link as HTMLElement;
      const targetSection = element.getAttribute('data-section');
      element.classList.toggle('active', targetSection === sectionId);
    });
  }

  private updateScrollProgress(): void {
    const scroller = this.scroller;
    if (!scroller) {
      return;
    }
    const isMobile = window.matchMedia('(max-width: 920px)').matches;
    const max = isMobile
      ? scroller.scrollHeight - scroller.clientHeight
      : scroller.scrollWidth - scroller.clientWidth;
    const current = isMobile ? scroller.scrollTop : scroller.scrollLeft;
    const progress = max > 0 ? Math.min(100, Math.max(0, (current / max) * 100)) : 0;
    document.documentElement.style.setProperty('--page-progress', `${progress}%`);
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
    this.scroller?.removeEventListener('scroll', this.scrollerHandler);
  }
}
