import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme.service';
import {Chip} from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, Chip,OverlayBadgeModule,BadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  themeService = inject(ThemeService);

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  get themeIcon(): string {
    return this.isDarkMode ? 'pi pi-sun' : 'pi pi-moon';
  }

  get envelope(): string {
    return 'pi pi-envelope';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
