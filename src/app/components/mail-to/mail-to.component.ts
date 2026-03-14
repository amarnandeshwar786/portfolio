import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-mail-to',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './mail-to.component.html'
})
export class MailToComponent {
  constructor(private http: HttpClient, private i18n: I18nService) {}

  formModel = {
    name: '',
    email: '',
    comment: '',
    hp: ''
  };

  statusMessage = '';
  isSubmitting = false;

  async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid) {
      this.statusMessage = this.i18n.t('mail.status.required');
      return;
    }
    this.isSubmitting = true;
    this.statusMessage = this.i18n.t('mail.sending');

    try {
      if (!environment.enableContactApi) {
        this.openMailClientFallback();
        this.statusMessage = this.i18n.t('mail.status.opened');
        return;
      }

      const config = await firstValueFrom(
        this.http.get<{ resendConfigured?: boolean }>(`${environment.apiBaseUrl}/api/config`)
      );
      if (!config?.resendConfigured) {
        this.openMailClientFallback();
        this.statusMessage = this.i18n.t('mail.status.opened');
        return;
      }

      await firstValueFrom(
        this.http.post(`${environment.apiBaseUrl}/api/contact`, {
          name: this.formModel.name.trim(),
          email: this.formModel.email.trim(),
          comment: this.formModel.comment.trim(),
          hp: this.formModel.hp
        })
      );
      this.statusMessage = this.i18n.t('mail.status.sent');
      form.resetForm();
    } catch (_err) {
      this.openMailClientFallback();
      this.statusMessage = this.i18n.t('mail.status.opened');
    } finally {
      this.isSubmitting = false;
    }
  }

  private openMailClientFallback(): void {
    const safeName = this.formModel.name.trim() || this.i18n.t('mail.nameFallback');
    const subject = encodeURIComponent(this.i18n.t('mail.subject', { name: safeName }));
    const body = encodeURIComponent(
      `Name: ${this.formModel.name}\nEmail: ${this.formModel.email}\n\nComment:\n${this.formModel.comment}`
    );
    window.location.href = `mailto:amarnandeshwar786@gmail.com?subject=${subject}&body=${body}`;
  }
}
