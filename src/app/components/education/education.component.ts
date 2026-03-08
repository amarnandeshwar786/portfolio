import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface EducationItem {
  icon: string;
  college: string;
  course: string;
  year: string;
  focus: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  educationList: EducationItem[] = [
    {
      icon: 'fa-laptop',
      college: 'Government Polytechnic, Bramhapuri',
      course: 'Diploma in Information Technology',
      year: '2012 - 2015',
      focus: 'Core software development, database fundamentals, and practical engineering projects.'
    },
    {
      icon: 'fa-briefcase',
      college: 'S. D. Junior College, Barwha',
      course: 'Higher Secondary Certificate (HSC)',
      year: '2011 - 2012',
      focus: 'Built a strong foundation in mathematics, science, and analytical problem solving.'
    },
    {
      icon: 'fa-book',
      college: 'Z. P. High School, Barwha',
      course: 'Secondary School Certificate (SSC)',
      year: '2009 - 2010',
      focus: 'Established fundamentals in academics and disciplined learning approach.'
    }
  ];
}
