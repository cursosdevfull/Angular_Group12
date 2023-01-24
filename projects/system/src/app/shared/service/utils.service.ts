import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import * as XLSX from 'xlsx';

import { ConfirmComponent } from '../components/confirm/confirm.component';
import { ACTION_PDF } from '../components/export/export.component';
import { MetaData } from '../interfaces/meta-data.interface';

declare var require: any;

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  async exportToPDF<Entity>(
    records: Entity[],
    metadatas: MetaData[],
    filename: string,
    title: string,
    option: ACTION_PDF
  ) {
    const dataUrl = await this.getDataUrl('assets/img/logo.jpg');

    const dataFormatted = {
      footer: function (currentPage, pageCount) {
        return [
          {
            text: currentPage.toString() + ' de ' + pageCount.toString(),
            alignment: 'center',
          },
        ];
      },
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [20, 20, 20, 20],
      content: [
        this.generateTableHeader(records, dataUrl, title),
        this.generateTableData(records, metadatas),
      ],
      styles: this.generateStyles(),
    };

    this.generatePdf(dataFormatted, filename, option);
  }

  private generatePdf(
    dataFormatted: any,
    filename: string,
    option: ACTION_PDF
  ) {
    const pdfDocGenerator = pdfMake.createPdf(dataFormatted);

    switch (option) {
      case 'view':
        pdfDocGenerator.open();
        break;
      case 'download':
        pdfDocGenerator.download(filename);
        break;
      case 'print':
        pdfDocGenerator.print();
        break;
    }
  }

  private generateTableHeader<Entity>(
    data: Entity[],
    dataUrl: any,
    title: string
  ) {
    return {
      margin: [0, 0, 0, 15],
      table: {
        widths: [120, 'auto', 50, 'auto'],
        body: [
          [
            {
              borderWidth: ['1px', '1px', '1px', '1px'],
              borderColor: ['#000', '#000', '#000', '#000'],
              border: [false, false, true, false],
              width: 100,
              image: dataUrl,
            },
            {
              border: [false, false, false, false],
              text: [
                this.generateColumn('Channel', 'headerLeft'),
                this.generateColumn('Av. De la República 123', 'subHeaderLeft'),
                this.generateColumn('San Isidro, Lima Perú', 'subHeaderLeft'),
                this.generateColumn('Tel: (591) 222-2222', 'subHeaderLeft'),
                this.generateColumn('info@channel.com', 'subHeaderLeft'),
                this.generateColumn('www.channel.com', 'subHeaderLeft'),
              ],
            },
            {
              border: [false, false, false, false],
              text: '',
            },
            {
              border: [false, false, false, false],
              text: title,
              style: 'titleReport',
            },
          ],
        ],
      },
    };
  }

  private generateTableData<Entity>(data: Entity[], metadatas: MetaData[]) {
    const body = data
      .map((el) => {
        const newElement = {};
        Object.keys(el).forEach((key) => {
          const metadata = metadatas.find((metadata) => metadata.field === key);
          if (metadata) {
            newElement[metadata.field] = el[key];
          }
        });
        return newElement;
      })
      .map((el) =>
        Object.keys(el).map((prop) => this.generateRowData(el, metadatas, prop))
      );

    const quantityColumns = metadatas.length;
    const widths = Array.from(Array(quantityColumns).keys()).map(
      (el) => Math.floor(100 / quantityColumns) + '%'
    );

    const rows = [];
    metadatas.forEach((el) => {
      const row = [
        {
          border: [false, false, false, false],
          text: el.title,
          style: 'header',
        },
      ];

      rows.push(row);
    });

    body.unshift(rows);

    return {
      margin: [0, 0, 0, 15],
      table: {
        widths,
        body,
      },
    };
  }

  private generateRowData<Entity>(
    data: Partial<Entity>,
    metadatas: MetaData[],
    key: string
  ) {
    const column = metadatas.find((metadata) => metadata.field === key);
    if (column) {
      return [
        {
          border: [false, false, false, false],
          text: data[key],
        },
      ];
    } else {
      return [];
    }
  }

  private generateColumn(text: string, style: string = null) {
    const column = {
      text: text + '\n',
    };

    if (style) {
      column['style'] = style;
    }

    return column;

    return {
      text,
      style,
      alignment: 'center',
    };
  }

  private generateStyles() {
    return {
      headerLeft: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 16,
        color: '#3c3b40',
      },
      subHeaderLeft: {
        fontFamily: 'Verdana',
        fontSize: 10,
        height: 16,
        color: '#3c3b40',
      },
      titleReport: {
        fontFamily: 'Verdana',
        fontSize: 15,
        height: 16,
        color: '#3c3b40',
      },
      header: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 14,
        color: '#3c3b40',
        bold: true,
      },
    };
  }

  private async getDataUrl(pathImage: string) {
    const response = await fetch(pathImage);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
}
