import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  constructor() {
    // Theme aus localStorage laden oder System-Präferenz verwenden
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    this.isDarkMode.set(isDark);

    // Effect für Theme-Wechsel
    effect(() => {
      this.applyTheme(this.isDarkMode());
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update(value => !value);
  }

  private applyTheme(isDark: boolean): void {
    const htmlElement = document.documentElement;

    if (isDark) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
