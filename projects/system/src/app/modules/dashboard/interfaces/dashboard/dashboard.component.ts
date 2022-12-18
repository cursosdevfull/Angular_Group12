import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'projects/system/src/app/shared/classes/base-component';

@Component({
  selector: 'amb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent extends BaseComponent implements OnInit {
  title: string = 'Dashboard';
  iconName: string = 'dashboard';

  ngOnInit(): void {}
}
