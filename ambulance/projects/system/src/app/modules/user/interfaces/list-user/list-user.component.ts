import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'projects/system/src/app/shared/classes/base-component';

@Component({
  selector: 'amb-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent extends BaseComponent implements OnInit {
  title = 'Users';
  iconName = 'face';

  ngOnInit(): void {}
}
