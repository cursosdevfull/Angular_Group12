import { Component } from '@angular/core';
import { ExportOptions, Messages, Modal } from 'projects/system/src/app/shared/classes/base-component';
import { MetaData } from 'projects/system/src/app/shared/interfaces/meta-data.interface';

@Component({
  selector: 'amb-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent {
  title = 'Users';
  iconName = 'faces';

  metaData: MetaData[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
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
    component: null,
    class: 'modal-user',
  };

  /* constructor(
    protected override layoutService: LayoutService,
    protected override exportService: ExportService,
    protected override utilsService: UtilsService,
    protected userApplication: UserApplication
  ) {
    super(layoutService, utilsService, exportService, userApplication);
  } */
}
