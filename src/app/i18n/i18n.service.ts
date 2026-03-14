import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LANGUAGE_OPTIONS, LangCode, TRANSLATIONS } from './translations';

type Params = Record<string, string | number | boolean>;

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly storageKey = 'portfolio-lang';
  private readonly langSubject = new BehaviorSubject<LangCode>(this.getInitialLang());
  readonly lang$ = this.langSubject.asObservable();
  readonly langOptions = LANGUAGE_OPTIONS;

  constructor() {
    this.applyLang(this.langSubject.value);
  }

  get currentLang(): LangCode {
    return this.langSubject.value;
  }

  setLang(lang: LangCode): void {
    if (lang === this.langSubject.value) {
      return;
    }
    this.langSubject.next(lang);
    this.applyLang(lang);
    try {
      localStorage.setItem(this.storageKey, lang);
    } catch {
      // Ignore storage failures in private mode.
    }
  }

  t(key: string, params?: Params): string {
    const lang = this.langSubject.value;
    const value = this.resolveKey(TRANSLATIONS[lang], key) ?? this.resolveKey(TRANSLATIONS.en, key);
    if (typeof value !== 'string') {
      return key;
    }
    return this.applyParams(value, params);
  }

  private getInitialLang(): LangCode {
    try {
      const stored = localStorage.getItem(this.storageKey) as LangCode | null;
      if (stored && stored in TRANSLATIONS) {
        return stored;
      }
    } catch {
      // Ignore storage failures in private mode.
    }
    const browserLang = (navigator.language || 'en').split('-')[0] as LangCode;
    if (browserLang in TRANSLATIONS) {
      return browserLang;
    }
    return 'en';
  }

  private resolveKey(tree: Record<string, unknown>, key: string): unknown {
    return key.split('.').reduce<unknown>((acc, part) => {
      if (!acc || typeof acc !== 'object') {
        return undefined;
      }
      const record = acc as Record<string, unknown>;
      return record[part];
    }, tree);
  }

  private applyParams(value: string, params?: Params): string {
    if (!params) {
      return value;
    }
    return Object.entries(params).reduce((result, [token, replacement]) => {
      const safe = String(replacement);
      return result.replace(new RegExp(`{{\\s*${token}\\s*}}`, 'g'), safe);
    }, value);
  }

  private applyLang(lang: LangCode): void {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.body.dir = 'ltr';
    } else {
      document.body.removeAttribute('dir');
    }
  }
}


