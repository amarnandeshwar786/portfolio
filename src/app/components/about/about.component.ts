import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './about.component.css',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly highlights: string[] = ['.NET Full Stack', 'Angular', 'API Design', 'SQL Performance', 'Team Leadership'];
}
