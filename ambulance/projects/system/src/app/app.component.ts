import { Component } from '@angular/core';

import { ILayout } from './config/interfaces/layout.interface';
import { LayoutService } from './config/services/layout.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isMenuShow: boolean = true;
  configLayout: ILayout;
  fecha: Date = new Date();

  toggleMenu(): void {
    this.isMenuShow = !this.isMenuShow;
  }

  constructor(private layoutService: LayoutService) {
    layoutService.configuration.subscribe((config: ILayout) => {
      this.configLayout = config;
    });
  }
}
