import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';
import { BaseComponent } from 'projects/system/src/app/shared/classes/base-component';
import { MetaData } from 'projects/system/src/app/shared/interfaces/meta-data.interface';
import { ExportService } from 'projects/system/src/app/shared/service/export.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'amb-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css'],
})
export class ListDriverComponent extends BaseComponent implements OnInit {
  @ViewChild('search') searchInput: ElementRef;

  title = 'Drivers';
  iconName = 'directions_bus';

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

  constructor(
    private layoutService: LayoutService,
    private exportService: ExportService
  ) {
    super();
    this.layoutService.configuration = { header: true, menu: true };
    this.changePage(0);
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup').subscribe(
      (event: KeyboardEvent) => {
        this.search(event);
      }
    );
  }

  ngOnInit(): void {}

  changePage(pageIndex: number) {
    this.dataSource = this.dataSourceOriginal.slice(
      pageIndex * this.pageSize,
      pageIndex * this.pageSize + this.pageSize
    );
  }

  search(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;

    const dataClone = [...this.dataSourceOriginal];
    this.dataSource = dataClone.filter((item) => item.name.includes(value));
  }

  showOptionsExport() {
    this.exportService.showExport();
  }
}
