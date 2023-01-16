import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';
import { MetaData } from 'projects/system/src/app/shared/interfaces/meta-data.interface';

@Component({
  selector: 'amb-list-history',
  templateUrl: './list-history.component.html',
  styleUrls: ['./list-history.component.css'],
})
export class ListHistoryComponent implements OnInit {
  title = 'Histories';
  iconName = 'medical_information';

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

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {}
}
