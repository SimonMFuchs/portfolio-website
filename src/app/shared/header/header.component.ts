import { Component, inject } from '@angular/core';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { CommonModule } from '@angular/common';
import { MainPageStateService } from '../../main-page/main-page-state.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SocialLinksComponent, CommonModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  mainPageState = inject(MainPageStateService);

  constructor(private translate: TranslateService) {
  }

  openBurgerOverlay(): void {
    this.mainPageState.hideMenu = false;
  }
  
  /**
 * Opens the burger menu by setting the `burgerMenuIsOpen` flag after a short "delay".
 *
 * @property {boolean} mainPageState.burgerMenuIsOpen
 *   Indicates whether the burger menu is currently open.
 *
 * Note: This uses a `setTimeout(..., 0)` workaround to defer the state change until
 * the overlay is fully rendered. Without this delay, the menu might slide in too early,
 * before the overlay becomes visible.
 */
  openBurgerMenu():void {
    setTimeout(() => {
          this.mainPageState.burgerMenuIsOpen = true;
    }, 0);
  }

  toggleLanguage(): void {
    if (this.mainPageState.currentLanguage === 'en') {
      this.translate.use('de');
      this.mainPageState.currentLanguage = 'de';
    } else {
      this.translate.use('en');
      this.mainPageState.currentLanguage = 'en';
    }
  }
}
