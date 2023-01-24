import { Component } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';
import { BaseComponent, Messages } from 'projects/system/src/app/shared/classes/base-component';
import { MetaData } from 'projects/system/src/app/shared/interfaces/meta-data.interface';
import { ExportService } from 'projects/system/src/app/shared/service/export.service';

import { ExportOptions, Modal } from '../../../../../shared/classes/base-component';
import { UtilsService } from '../../../../../shared/service/utils.service';
import { DriverApplication } from '../../../application/driver.application';
import { Driver } from '../../../domain/driver';
import { DriverRepository } from '../../../domain/driver.repository';
import { FormDriverComponent } from '../form-driver/form-driver.component';

@Component({
  selector: 'amb-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css'],
})
export class ListDriverComponent extends BaseComponent<
  Driver,
  DriverRepository
> {
  title = 'Drivers';
  iconName = 'directions_bus';

  metaData: MetaData[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
  ];

  metaDataExport: MetaData[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
  ];

  exportOptions: ExportOptions = {
    name: 'drivers',
    filename: 'drivers',
  };

  messages: Messages = {
    confirm: '¿Está seguro de eliminar?',
    insert: 'Piloto insertado',
    update: 'Piloto actualizado',
    delete: 'Piloto eliminado',
  };

  modal: Modal = {
    component: FormDriverComponent,
    class: 'modal-driver',
  };

  constructor(
    protected override layoutService: LayoutService,
    protected override exportService: ExportService,
    protected override utilsService: UtilsService,
    protected driverApplication: DriverApplication
  ) {
    super(layoutService, utilsService, exportService, driverApplication);
  }
}
