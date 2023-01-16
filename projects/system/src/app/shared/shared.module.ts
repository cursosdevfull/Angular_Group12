import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { WebcamModule } from 'ngx-webcam';

import { ConfirmComponent } from './components/confirm/confirm.component';
import { ContainerComponent } from './components/container/container.component';
import { ExportComponent } from './components/export/export.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PhotoComponent } from './components/photo/photo.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { UploadDirective } from './directives/upload.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    ExportComponent,
    ConfirmComponent,
    LoaderComponent,
    PhotoComponent,
    UploadDirective,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    WebcamModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PerfectScrollbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    PaginatorComponent,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    FlexLayoutModule,
    ExportComponent,
    MatDialogModule,
    MatSnackBarModule,
    LoaderComponent,
    PhotoComponent,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class SharedModule {}
