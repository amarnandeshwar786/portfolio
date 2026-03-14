import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

interface EducationItem {
  icon: string;
  college: string;
  courseKey: string;
  year: string;
  focusKey: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  educationList: EducationItem[] = [
    {
      icon: 'fa-laptop',
      college: 'Government Polytechnic, Bramhapuri',
      courseKey: 'education.items.item1.course',
      year: '2012 - 2015',
      focusKey: 'education.items.item1.focus'
    },
    {
      icon: 'fa-briefcase',
      college: 'S. D. Junior College, Barwha',
      courseKey: 'education.items.item2.course',
      year: '2011 - 2012',
      focusKey: 'education.items.item2.focus'
    },
    {
      icon: 'fa-book',
      college: 'Z. P. High School, Barwha',
      courseKey: 'education.items.item3.course',
      year: '2009 - 2010',
      focusKey: 'education.items.item3.focus'
    }
  ];
}
