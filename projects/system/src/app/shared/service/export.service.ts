import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ExportComponent } from '../components/export/export.component';
import { MetaData } from '../interfaces/meta-data.interface';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor(private bottomSheet: MatBottomSheet) {}

  showExport(
    records: any[],
    metaDatas: MetaData[],
    elementName: string,
    filename: string
  ) {
    this.bottomSheet.open(ExportComponent, {
      data: { records, metaDatas, elementName, filename },
    });
  }
}
