import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { RoleApplication } from '../../../role/application/role.application';

interface IRole {
  id: number;
  rol: string;
}

@Component({
  selector: 'amb-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormUserComponent implements OnInit {
  title: string;
  group: FormGroup;
  roles: Observable<any[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private reference: MatDialogRef<FormUserComponent>,
    private readonly roleApplication: RoleApplication
  ) {
    this.title = data ? 'EDIT' : 'NEW';
    this.loadForm();
    this.loadRoles();
  }

  loadForm() {
    console.log(this.data);
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      correo: new FormControl(this.data?.correo, Validators.required),
      roles: new FormControl(
        this.data?.roles.map((role) => role.id),
        Validators.required
      ),
    });

    if (!this.data) {
      this.group.addControl(
        'password',
        new FormControl('', Validators.required)
      );
    } else {
      this.group.addControl('password', new FormControl(''));
    }
  }

  loadRoles() {
    this.roles = this.roleApplication.list();
  }

  save() {
    const values = this.group.value;
    const recordId = values.id;
    delete values.id;

    if (this.data && !values.password) {
      delete values.password;
    }

    this.reference.close({ id: recordId, data: values });
  }

  ngOnInit(): void {}
}
