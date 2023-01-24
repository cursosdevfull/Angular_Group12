import { environment } from 'projects/system/src/environments/environment';

import { LayoutService } from '../../config/services/layout.service';
import { BaseApplication } from '../../core/application/base-application';
import { Base, ResultPage } from '../../core/domain/base.interface';
import { MetaData } from '../interfaces/meta-data.interface';
import { ExportService } from '../service/export.service';
import { UtilsService } from '../service/utils.service';

export type ExportOptions = {
  name: string;
  filename: string;
};

export type Messages = {
  confirm: string;
  insert: string;
  update: string;
  delete: string;
};

export type Modal = {
  component: any;
  class: string;
};

export abstract class BaseComponent<Entity, Repository extends Base<Entity>> {
  abstract title: string;
  abstract iconName: string;
  abstract metaData: MetaData[];
  abstract metaDataExport: MetaData[];
  abstract exportOptions: ExportOptions;
  abstract messages: Messages;
  abstract modal: Modal;

  totalRecords = 0;
  pageSize = environment.pageSize;
  currentPage = 0;

  dataSourceOriginal = [];
  dataSource = [];

  constructor(
    protected layoutService: LayoutService,
    protected utilsService: UtilsService,
    protected exportService: ExportService,
    protected application: BaseApplication<Entity, Repository>
  ) {
    this.layoutService.configuration = { header: true, menu: true };
    this.changePage(0);
  }

  changePage(pageIndex: number) {
    this.application.page(pageIndex).subscribe({
      next: (data: ResultPage<Entity>) => {
        console.log(data);
        this.dataSource = data.records;
        this.totalRecords = data.totalRecords;
        this.currentPage = pageIndex;
      },
    });
  }

  showOptionsExport() {
    this.application.list().subscribe({
      next: (data: Entity[]) => {
        this.exportService.showExport(
          data,
          this.metaDataExport,
          this.exportOptions.name,
          this.exportOptions.filename
        );
      },
    });
  }

  delete(id: number, record: string = '') {
    const confirmMessage = [this.messages.confirm, record];
    this.utilsService.confirm(confirmMessage).subscribe((result) => {
      if (result) {
        this.application.delete(id).subscribe({
          next: () => {
            this.changePage(this.currentPage);

            this.utilsService.showNotification(this.messages.delete);
          },
        });
      }
    });
  }

  openForm(data: Entity = null) {
    this.utilsService
      .openForm(this.modal.component, this.modal.class, data)
      .subscribe((result) => {
        if (!result) return;
        const id = result.id;

        if (id) {
          this.application.update(id, result.data).subscribe({
            next: () => {
              this.changePage(this.currentPage);
              this.utilsService.showNotification(this.messages.update);
            },
          });
        } else {
          this.application.insert(result.data).subscribe({
            next: () => {
              this.changePage(this.currentPage);
              this.utilsService.showNotification(this.messages.insert);
            },
          });
        }
      });
  }
}
