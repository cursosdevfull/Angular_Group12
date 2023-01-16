import { Component } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';
import { BaseComponent, Messages } from 'projects/system/src/app/shared/classes/base-component';
import { MetaData } from 'projects/system/src/app/shared/interfaces/meta-data.interface';
import { ExportService } from 'projects/system/src/app/shared/service/export.service';

import { ExportOptions, Modal } from '../../../../../shared/classes/base-component';
import { UtilsService } from '../../../../../shared/service/utils.service';
import { MedicApplication } from '../../../application/medic.application';
import { Medic } from '../../../domain/medic';
import { MedicRepository } from '../../../domain/medic.repository';
import { FormMedicComponent } from '../form-medic/form-medic.component';

@Component({
  selector: 'amb-list-medic',
  templateUrl: './list-medic.component.html',
  styleUrls: ['./list-medic.component.css'],
})
export class ListMedicComponent extends BaseComponent<Medic, MedicRepository> {
  title = 'Medics';
  iconName = 'directions_bus';

  metaData: MetaData[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'segundo_nombre', title: 'Segundo Nombre' },
    { field: 'apellido', title: 'Apellido Paterno' },
    { field: 'cmp', title: 'CMP' },
    { field: 'correo', title: 'Correo' },
    { field: 'dni', title: 'DNI' },
  ];

  exportOptions: ExportOptions = {
    name: 'medics',
    filename: 'medics',
  };

  messages: Messages = {
    confirm: '¿Está seguro de eliminar?',
    insert: 'Médico insertado',
    update: 'Médico actualizado',
    delete: 'Médico eliminado',
  };

  modal: Modal = {
    component: FormMedicComponent,
    class: 'modal-medic',
  };

  constructor(
    protected override layoutService: LayoutService,
    protected override exportService: ExportService,
    protected override utilsService: UtilsService,
    protected medicApplication: MedicApplication
  ) {
    super(layoutService, utilsService, exportService, medicApplication);
  }
}
