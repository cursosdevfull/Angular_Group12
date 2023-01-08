import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';
import { BaseComponent } from 'projects/system/src/app/shared/classes/base-component';

@Component({
  selector: 'amb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent extends BaseComponent implements OnInit {
  title: string = 'Dashboard';
  iconName: string = 'dashboard';

  constructor(private layoutService: LayoutService) {
    super();
    this.layoutService.configuration = { header: true, menu: true };
  }

  ngOnInit(): void {}
}
