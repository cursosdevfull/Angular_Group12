import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import * as XLSX from 'xlsx';

import { ConfirmComponent } from '../components/confirm/confirm.component';
import { MetaData } from '../interfaces/meta-data.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  loading: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly dialog: MatDialog,
    private readonly notifier: MatSnackBar
  ) {}

  confirm(message: string[] = []): Observable<any> {
    const reference: MatDialogRef<ConfirmComponent> = this.dialog.open(
      ConfirmComponent,
      { disableClose: true, width: '400px' }
    );

    if (message.length > 0) reference.componentInstance.messages = message;

    return reference.afterClosed();
  }

  openForm<ComponentToOpen extends ComponentType<any>>(
    componentToOpen: ComponentToOpen,
    panelClass: string,
    data: any = null
  ): Observable<any> {
    const reference: MatDialogRef<any> = this.dialog.open(componentToOpen, {
      panelClass,
      disableClose: true,
      data,
    });

    return reference.afterClosed();
  }

  exportToExcel<Entity>(
    records: Entity[],
    metadatas: MetaData[],
    filename: string,
    sheetName: string
  ) {
    const result = this.dtoExcel(records, metadatas);

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_json(worksheet, result);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  }

  private dtoExcel<Entity>(records: Entity[], metadatas: MetaData[]) {
    return records.map((item: Entity) => {
      const newElement = {};
      for (const prop in item) {
        const metadata = metadatas.find(
          (metadata: MetaData) => metadata.field === prop
        );
        if (metadata) {
          newElement[metadata.title] = item[prop];
        }
      }

      return newElement;
    });
  }

  showNotification(message: string, duration: number = 2000) {
    this.notifier.open(message, null, {
      duration,
    });
  }
}
