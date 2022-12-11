import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ExportComponent } from '../components/export/export.component';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor(private bottomSheet: MatBottomSheet) {}

  showExport() {
    this.bottomSheet.open(ExportComponent);
  }
}
