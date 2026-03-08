import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ExperienceItem {
  icon: string;
  company: string;
  period: string;
  location: string;
  role: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experienceList: ExperienceItem[] = [
    {
      icon: 'fa-briefcase',
      company: 'NO Brain IT Solutions Pvt. Ltd.',
      period: 'July 2021 - April 2025',
      location: 'Pune',
      role: 'Module Lead',
      highlights: [
        'Delivered a project one week ahead of schedule, enabling smooth deployment and exceeding client expectations.',
        'Optimized system architecture, improving application performance by 20% and reducing response time by 30%.'
      ]
    },
    {
      icon: 'fa-code',
      company: 'NO Brain IT Solutions Pvt. Ltd.',
      period: 'July 2021 - April 2025',
      location: 'Pune',
      role: '.NET Full Stack Developer',
      highlights: [
        'Optimized database query systems, improving backend performance by 25% and significantly enhancing API response time.',
        'Designed and developed a fully dynamic, multi-tenant clinical trial platform and delivered it successfully to the client.'
      ]
    },
    {
      icon: 'fa-mobile',
      company: 'Webphoros',
      period: 'May 2020 - March 2021',
      location: 'Bramhapuri',
      role: 'Senior Software Engineer',
      highlights: [
        'Learned new frameworks and delivered a mobile application within tight timelines, demonstrating adaptability and strong execution.',
        'Built a food donation app during the COVID-19 period to help users locate donation camps, and received client appreciation for its social impact.'
      ]
    },
    {
      icon: 'fa-hospital-o',
      company: 'Vandan Medical Foundation',
      period: 'February 2018 - December 2018',
      location: 'Nagpur',
      role: 'Senior Software Engineer',
      highlights: [
        'Transformed a multi-page application into a streamlined single-page application (SPA), improving user experience and navigation flow.',
        'Revamped registration and barcode scanning workflows, increasing user registrations by 60% through a faster and more user-friendly portal.'
      ]
    }
  ];
}
