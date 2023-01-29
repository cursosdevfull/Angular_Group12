import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [MatTableModule, CommonModule, FlexLayoutModule],
  exports: [TableComponent],
})
export class TableDevModule {}
