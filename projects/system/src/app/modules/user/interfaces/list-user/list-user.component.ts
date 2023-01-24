import { Component } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';
import { BaseComponent, ExportOptions, Messages, Modal } from 'projects/system/src/app/shared/classes/base-component';
import { MetaData } from 'projects/system/src/app/shared/interfaces/meta-data.interface';
import { ExportService } from 'projects/system/src/app/shared/service/export.service';
import { UtilsService } from 'projects/system/src/app/shared/service/utils.service';

import { UserApplication } from '../../application/user.application';
import { User } from '../../domain/user';
import { UserRepository } from '../../domain/user.repository';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'amb-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent extends BaseComponent<User, UserRepository> {
  title = 'Users';
  iconName = 'faces';

  metaData: MetaData[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'correo', title: 'Correo' },
  ];

  metaDataExport: MetaData[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'correo', title: 'Correo' },
  ];

  exportOptions: ExportOptions = {
    name: 'users',
    filename: 'users',
  };

  messages: Messages = {
    confirm: '¿Está seguro de eliminar?',
    insert: 'Usuario insertado',
    update: 'Usuario actualizado',
    delete: 'Usuario eliminado',
  };

  modal: Modal = {
    component: FormUserComponent,
    class: 'modal-user',
  };

  constructor(
    protected override layoutService: LayoutService,
    protected override exportService: ExportService,
    protected override utilsService: UtilsService,
    protected userApplication: UserApplication
  ) {
    super(layoutService, utilsService, exportService, userApplication);
  }
}
