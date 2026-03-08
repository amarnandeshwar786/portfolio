import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mail-to',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mail-to.component.html'
})
export class MailToComponent {
  constructor(private http: HttpClient) {}

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
      this.statusMessage = 'Please complete all fields.';
      return;
    }
    this.isSubmitting = true;
    this.statusMessage = 'Sending...';

    try {
      if (!environment.enableContactApi) {
        this.openMailClientFallback();
        this.statusMessage = 'Opened your mail app.';
        return;
      }

      const config = await firstValueFrom(
        this.http.get<{ resendConfigured?: boolean }>(`${environment.apiBaseUrl}/api/config`)
      );
      if (!config?.resendConfigured) {
        this.openMailClientFallback();
        this.statusMessage = 'Opened your mail app.';
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
      this.statusMessage = 'Message sent successfully.';
      form.resetForm();
    } catch (_err) {
      this.openMailClientFallback();
      this.statusMessage = 'Opened your mail app.';
    } finally {
      this.isSubmitting = false;
    }
  }

  private openMailClientFallback(): void {
    const subject = encodeURIComponent(`Say Hello from ${this.formModel.name}`);
    const body = encodeURIComponent(
      `Name: ${this.formModel.name}\nEmail: ${this.formModel.email}\n\nComment:\n${this.formModel.comment}`
    );
    window.location.href = `mailto:amarnandeshwar786@gmail.com?subject=${subject}&body=${body}`;
  }
}
