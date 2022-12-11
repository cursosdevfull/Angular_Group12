import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';
import { BaseComponent } from 'projects/system/src/app/shared/classes/base-component';

@Component({
  selector: 'amb-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css'],
})
export class ListDriverComponent extends BaseComponent implements OnInit {
  title = 'Drivers';
  iconName = 'directions_bus';

  listFields = ['id', 'name', 'age'];
  dataSource = [
    { id: 1, name: 'test', age: 20 },
    { id: 2, name: 'test2', age: 40 },
  ];

  constructor(private layoutService: LayoutService) {
    super();
    this.layoutService.configuration = { header: true, menu: true };
  }

  ngOnInit(): void {}
}
