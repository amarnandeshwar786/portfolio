import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  styleUrl: './about.component.css',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly highlights: string[] = [
    'about.highlights.dotnet',
    'about.highlights.angular',
    'about.highlights.api',
    'about.highlights.sql',
    'about.highlights.leadership'
  ];
}
