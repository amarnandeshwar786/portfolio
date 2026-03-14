import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';

interface ProjectItem {
  nameKey: string;
  subtitleKey: string;
  roleKey: string;
  descriptionKey: string;
  highlights: string[];
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  activeIndex = 0;

  constructor(private i18n: I18nService) {}

  projects: ProjectItem[] = [
    {
      nameKey: 'projects.items.m12.name',
      subtitleKey: 'projects.items.m12.subtitle',
      roleKey: 'projects.items.m12.role',
      descriptionKey: 'projects.items.m12.description',
      highlights: [
        'projects.items.m12.highlights.h1',
        'projects.items.m12.highlights.h2',
        'projects.items.m12.highlights.h3'
      ],
      responsibilities: [
        'projects.items.m12.responsibilities.r1',
        'projects.items.m12.responsibilities.r2',
        'projects.items.m12.responsibilities.r3'
      ],
      technologies: ['Node.js', 'React', 'MS SQL Server']
    },
    {
      nameKey: 'projects.items.dof.name',
      subtitleKey: 'projects.items.dof.subtitle',
      roleKey: 'projects.items.dof.role',
      descriptionKey: 'projects.items.dof.description',
      highlights: [
        'projects.items.dof.highlights.h1',
        'projects.items.dof.highlights.h2',
        'projects.items.dof.highlights.h3'
      ],
      responsibilities: [
        'projects.items.dof.responsibilities.r1',
        'projects.items.dof.responsibilities.r2',
        'projects.items.dof.responsibilities.r3'
      ],
      technologies: ['Angular', 'ASP.NET Core Web API', 'MS SQL Server', 'SharePoint']
    },
    {
      nameKey: 'projects.items.teaqip.name',
      subtitleKey: 'projects.items.teaqip.subtitle',
      roleKey: 'projects.items.teaqip.role',
      descriptionKey: 'projects.items.teaqip.description',
      highlights: [
        'projects.items.teaqip.highlights.h1',
        'projects.items.teaqip.highlights.h2',
        'projects.items.teaqip.highlights.h3'
      ],
      responsibilities: [
        'projects.items.teaqip.responsibilities.r1',
        'projects.items.teaqip.responsibilities.r2',
        'projects.items.teaqip.responsibilities.r3',
        'projects.items.teaqip.responsibilities.r4'
      ],
      technologies: ['Angular', 'ASP.NET Core Web API', 'MS SQL Server']
    }
  ];

  goToProject(index: number): void {
    this.activeIndex = index;
  }

  getProjectName(project: ProjectItem): string {
    return this.i18n.t(project.nameKey);
  }
}
