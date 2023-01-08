import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'projects/system/src/app/config/services/layout.service';
import { BaseComponent } from 'projects/system/src/app/shared/classes/base-component';
import { MetaData } from 'projects/system/src/app/shared/interfaces/meta-data.interface';
import { ExportService } from 'projects/system/src/app/shared/service/export.service';
import { fromEvent } from 'rxjs';

import { ResultPage } from '../../../../../core/domain/base.interface';
import { UtilsService } from '../../../../../shared/service/utils.service';
import { DriverApplication } from '../../../application/driver.application';
import { Driver } from '../../../domain/driver';
import { FormDriverComponent } from '../form-driver/form-driver.component';

@Component({
  selector: 'amb-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css'],
})
export class ListDriverComponent extends BaseComponent implements OnInit {
  @ViewChild('search') searchInput: ElementRef;

  title = 'Drivers';
  iconName = 'directions_bus';

  metaData: MetaData[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
  ];
  dataSourceOriginal = [];

  dataSource = [];

  constructor(
    private layoutService: LayoutService,
    private exportService: ExportService,
    private utilsService: UtilsService,
    private router: Router,
    private readonly driverApplication: DriverApplication
  ) {
    super();
    this.layoutService.configuration = { header: true, menu: true };
    this.changePage(0);
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup').subscribe(
      (event: KeyboardEvent) => {
        this.search(event);
      }
    );
  }

  ngOnInit(): void {}

  changePage(pageIndex: number) {
    this.driverApplication.page(pageIndex).subscribe({
      next: (data: ResultPage<Driver>) => {
        this.dataSource = data.records;
        this.totalRecords = data.totalRecords;
        this.currentPage = pageIndex;
      },
    });
    /*     this.dataSource = this.dataSourceOriginal.slice(
      pageIndex * this.pageSize,
      pageIndex * this.pageSize + this.pageSize
    ); */
  }

  search(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;

    const dataClone = [...this.dataSourceOriginal];
    this.dataSource = dataClone.filter((item) => item.name.includes(value));
  }

  showOptionsExport() {
    this.driverApplication.list().subscribe({
      next: (data: Driver[]) => {
        const metaDatas: MetaData[] = [
          { field: 'id', title: 'ID' },
          { field: 'nombre', title: 'Nombre' },
        ];
        this.exportService.showExport(data, metaDatas, 'drivers', 'drivers');
      },
    });
  }

  delete(id: number) {
    this.utilsService.confirm('¿Está seguro?').subscribe((result) => {
      if (result) {
        this.driverApplication.delete(id).subscribe({
          next: () => {
            this.changePage(this.currentPage);
            this.utilsService.showNotification('Driver eliminado');
          },
        });
      }
    });
  }

  openForm(data: Driver = null) {
    this.utilsService
      .openForm(FormDriverComponent, 'modal-driver', data)
      .subscribe((result) => {
        if (!result) return;

        const id = result.id;
        delete result.id;

        if (id) {
          this.driverApplication.update(id, result).subscribe({
            next: () => {
              this.changePage(this.currentPage);
              this.utilsService.showNotification(
                'Información de driver actualizada'
              );
            },
          });
        } else {
          this.driverApplication.insert(result).subscribe({
            next: () => {
              this.changePage(this.currentPage);
              this.utilsService.showNotification('Driver creado');
            },
          });
        }
      });
  }

  edit(data: any) {
    this.router.navigate(['driver', data.id]);
  }
}
