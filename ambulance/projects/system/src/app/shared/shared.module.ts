import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [TitleComponent, ContainerComponent, TableComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    TitleComponent,
    ContainerComponent,
    TableComponent,
  ],
})
export class SharedModule {}
