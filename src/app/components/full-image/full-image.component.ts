import { Component } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-full-image',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './full-image.component.html'
})
export class FullImageComponent {}
