import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

interface ExperienceItem {
  icon: string;
  company: string;
  period: string;
  location: string;
  roleKey: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experienceList: ExperienceItem[] = [
    {
      icon: 'fa-briefcase',
      company: 'NO Brain IT Solutions Pvt. Ltd.',
      period: 'July 2021 - April 2025',
      location: 'Pune',
      roleKey: 'experience.items.item1.role',
      highlights: ['experience.items.item1.highlights.h1', 'experience.items.item1.highlights.h2']
    },
    {
      icon: 'fa-code',
      company: 'NO Brain IT Solutions Pvt. Ltd.',
      period: 'July 2021 - April 2025',
      location: 'Pune',
      roleKey: 'experience.items.item2.role',
      highlights: ['experience.items.item2.highlights.h1', 'experience.items.item2.highlights.h2']
    },
    {
      icon: 'fa-mobile',
      company: 'Webphoros',
      period: 'May 2020 - March 2021',
      location: 'Bramhapuri',
      roleKey: 'experience.items.item3.role',
      highlights: ['experience.items.item3.highlights.h1', 'experience.items.item3.highlights.h2']
    },
    {
      icon: 'fa-hospital-o',
      company: 'Vandan Medical Foundation',
      period: 'February 2018 - December 2018',
      location: 'Nagpur',
      roleKey: 'experience.items.item4.role',
      highlights: ['experience.items.item4.highlights.h1', 'experience.items.item4.highlights.h2']
    }
  ];
}
