import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { MetaData } from '../../interfaces/meta-data.interface';
import { UtilsService } from '../../service/utils.service';

export type ACTION_PDF = 'view' | 'download' | 'print';

@Component({
  selector: 'amb-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent implements OnInit {
  records: any[];
  metaDatas: MetaData[];
  elementName: string;
  filename: string;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private reference: MatBottomSheetRef<ExportComponent>,
    private utilsService: UtilsService
  ) {
    this.records = data.records;
    this.metaDatas = data.metaDatas;
    this.filename = data.filename;
    this.elementName = data.elementName;
  }

  ngOnInit(): void {}

  exportToExcel() {
    this.utilsService.exportToExcel(
      this.records,
      this.metaDatas,
      this.filename,
      this.elementName
    );

    this.reference.dismiss();
  }

  exportToPDF(option: ACTION_PDF) {
    this.utilsService.exportToPDF(
      this.records,
      this.metaDatas,
      this.filename,
      this.elementName,
      option
    );

    this.reference.dismiss();
  }
}
