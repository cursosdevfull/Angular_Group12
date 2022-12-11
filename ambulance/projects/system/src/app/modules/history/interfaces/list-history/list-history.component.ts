import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'projects/system/src/app/shared/classes/base-component';

@Component({
  selector: 'amb-list-history',
  templateUrl: './list-history.component.html',
  styleUrls: ['./list-history.component.css'],
})
export class ListHistoryComponent extends BaseComponent implements OnInit {
  title = 'Histories';
  iconName = 'medical_information';

  ngOnInit(): void {}
}
