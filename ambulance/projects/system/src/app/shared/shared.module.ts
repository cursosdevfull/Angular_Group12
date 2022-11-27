import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatSidenavModule],
  exports: [MatToolbarModule, MatSidenavModule],
})
export class SharedModule {}
