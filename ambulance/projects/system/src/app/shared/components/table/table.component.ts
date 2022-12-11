import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() listFields = ['id', 'name'];
  @Input() dataSource = [
    { id: 1, name: 'test' },
    { id: 2, name: 'test2' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
