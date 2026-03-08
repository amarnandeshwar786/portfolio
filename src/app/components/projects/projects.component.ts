import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProjectItem {
  name: string;
  subtitle: string;
  role: string;
  description: string;
  highlights: string[];
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  activeIndex = 0;

  projects: ProjectItem[] = [
    {
      name: 'M-12 Planner',
      subtitle: 'Business Planning and Forecasting Platform',
      role: 'Backend Developer',
      description:
        'Built a full-stack planning platform that helps organizations forecast financial performance using historical data and predictive models.',
      highlights: [
        'Enabled what-if simulation of business scenarios for better strategic planning.',
        'Helped identify potential profit leakage and optimization opportunities.',
        'Provided clear trend and revenue forecasting insights for decision-making.'
      ],
      responsibilities: [
        'Developed and maintained backend services in Node.js and integrated them with React-based frontend modules.',
        'Designed high-performance REST APIs and SQL Server stored procedures for complex planning calculations.',
        'Contributed across the full lifecycle: design, implementation, testing, and deployment.'
      ],
      technologies: ['Node.js', 'React', 'MS SQL Server']
    },
    {
      name: 'Department of Finance (DOF) Portal',
      subtitle: 'UAE Departmental Portal',
      role: 'Senior Software Developer',
      description:
        'Developed a comprehensive portal for the UAE Department of Finance to streamline internal operations and improve employee engagement.',
      highlights: [
        'Supported key modules such as performance management, training management, internal communication, and surveys.',
        'Enabled secure document management and collaboration through SharePoint integration.',
        'Improved usability for day-to-day departmental workflows, including menu and announcement management.'
      ],
      responsibilities: [
        'Implemented backend functionality using ASP.NET Core Web API.',
        'Designed REST APIs for modules such as employee performance tracking and training management.',
        'Built SQL Server queries and stored procedures to support critical backend operations.'
      ],
      technologies: ['Angular', 'ASP.NET Core Web API', 'MS SQL Server', 'SharePoint']
    },
    {
      name: 'Teacher Quality Improvement Program (TeaQIP)',
      subtitle: 'Student Feedback and Teaching Quality System',
      role: 'Team Lead',
      description:
        'Led development of a student feedback platform focused on improving teaching quality through data-driven and action-oriented insights.',
      highlights: [
        'Enabled structured student feedback collection and analysis to support continuous teaching improvement.',
        'Aligned academic quality outcomes with societal, industry, and business expectations.',
        'Promoted a learner-centered model for stronger engagement and instructional impact.'
      ],
      responsibilities: [
        'Handled team onboarding, mentoring, task planning, and performance feedback.',
        'Defined project scope, timelines, deliverables, and workload distribution.',
        'Monitored execution, mitigated risks, resolved conflicts, and maintained communication transparency.',
        'Reviewed deliverables regularly to ensure quality and timely completion.'
      ],
      technologies: ['Angular', 'ASP.NET Core Web API', 'MS SQL Server']
    }
  ];

  goToProject(index: number): void {
    this.activeIndex = index;
  }
}
