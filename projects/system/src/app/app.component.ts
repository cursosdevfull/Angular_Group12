import { Component } from '@angular/core';

import { ILayout } from './config/interfaces/layout.interface';
import { LayoutService } from './config/services/layout.service';
import { UtilsService } from './shared/service/utils.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isMenuShow: boolean = true;
  isLoading = false;
  configLayout: ILayout;
  fecha: Date = new Date();

  toggleMenu(): void {
    this.isMenuShow = !this.isMenuShow;
  }

  constructor(
    private layoutService: LayoutService,
    private readonly utilsService: UtilsService
  ) {
    layoutService.configuration.subscribe((config: ILayout) => {
      this.configLayout = config;
    });
    utilsService.loading.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
  }
}
