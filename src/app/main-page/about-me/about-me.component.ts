import { Component } from '@angular/core';
import { AboutMeOverlayComponent } from './about-me-overlay/about-me-overlay.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [AboutMeOverlayComponent, TranslateModule, CommonModule, RouterLink],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  emojiIsHovered: boolean = false;

  changeHoverState(state: boolean): void {
    this.emojiIsHovered = state;
  }
}
