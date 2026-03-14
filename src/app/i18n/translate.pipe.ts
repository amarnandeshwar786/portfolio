import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { I18nService } from './i18n.service';

@Pipe({
  name: 't',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private lastKey = '';
  private lastValue = '';

  constructor(private i18n: I18nService, private cdr: ChangeDetectorRef) {
    this.i18n.lang$.subscribe(() => {
      this.lastKey = '';
      this.lastValue = '';
      this.cdr.markForCheck();
    });
  }

  transform(key: string, params?: Record<string, string | number | boolean>): string {
    if (key === this.lastKey && !params) {
      return this.lastValue;
    }
    const value = this.i18n.t(key, params);
    if (!params) {
      this.lastKey = key;
      this.lastValue = value;
    }
    return value;
  }
}
