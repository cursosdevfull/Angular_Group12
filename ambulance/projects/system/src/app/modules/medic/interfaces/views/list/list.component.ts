import { Component } from '@angular/core';
import { BaseComponent } from 'projects/system/src/app/shared/classes/base-component';

@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  /*   providers: [MedicService], */
})
export class ListComponent extends BaseComponent {
  title = 'Medics';
  iconName = 'personal_injury';
}
