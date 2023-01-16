import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';

@Component({
  selector: 'amb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title: string = 'Dashboard';
  iconName: string = 'dashboard';

  constructor(private layoutService: LayoutService) {
    this.layoutService.configuration = { header: true, menu: true };
  }

  ngOnInit(): void {}
}
