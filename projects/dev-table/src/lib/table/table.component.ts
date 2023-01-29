import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';

import { MetaData } from './meta-data.interface';

@Component({
  selector: 'comp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() metaData: MetaData[];
  @Input() dataSource = [];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ContentChildren(MatColumnDef, { descendants: true })
  columnDefs: QueryList<MatColumnDef>;

  listFields = ['id', 'name'];

  constructor() {}

  ngOnInit(): void {
    this.listFields = this.metaData.map((item) => item.field);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit(): void {}

  ngAfterContentInit(): void {
    if (!this.columnDefs) {
      return;
    }

    this.columnDefs.forEach((columnDef) => {
      this.listFields.push(columnDef.name);
      this.table.addColumnDef(columnDef);
    });
  }

  select(row: any): void {
    console.log(row);
  }
}
