import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  templateUrl: './loader.component.html'
})
export class LoaderComponent {
  @Input() hiddenClass = false;
}
