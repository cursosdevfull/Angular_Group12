import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'projects/system/src/app/shared/classes/base-component';

@Component({
  selector: 'amb-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css'],
})
export class EditDriverComponent extends BaseComponent implements OnInit {
  title = 'Drivers';
  iconName = 'directions_bus';

  group: FormGroup;

  constructor(private activatedRoute: ActivatedRoute) {
    super();
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  loadData(id: number) {}

  save() {}
}
