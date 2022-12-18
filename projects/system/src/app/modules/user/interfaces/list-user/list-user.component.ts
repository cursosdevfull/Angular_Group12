import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';
import { BaseComponent } from 'projects/system/src/app/shared/classes/base-component';
import { MetaData } from 'projects/system/src/app/shared/interfaces/meta-data.interface';

@Component({
  selector: 'amb-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent extends BaseComponent implements OnInit {
  title = 'Users';
  iconName = 'face';

  metaData: MetaData[] = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre' },
    { field: 'age', title: 'Edad' },
  ];
  dataSourceOriginal = [
    { id: 1, name: 'test', age: 20 },
    { id: 2, name: 'test2', age: 40 },
    { id: 3, name: 'test', age: 20 },
    { id: 4, name: 'test2', age: 40 },
    { id: 5, name: 'test', age: 20 },
    { id: 6, name: 'test2', age: 40 },
    { id: 7, name: 'test', age: 20 },
    { id: 8, name: 'test2', age: 40 },
    { id: 9, name: 'test', age: 20 },
    { id: 10, name: 'test2', age: 40 },
    { id: 11, name: 'test', age: 20 },
    { id: 12, name: 'test2', age: 40 },
  ];

  dataSource = [];

  constructor(private layoutService: LayoutService) {
    super();
    this.layoutService.configuration = { header: true, menu: true };
    this.changePage(0);
  }

  ngOnInit(): void {}

  changePage(pageIndex: number) {
    this.dataSource = this.dataSourceOriginal.slice(
      pageIndex * this.pageSize,
      pageIndex * this.pageSize + this.pageSize
    );
  }
}
