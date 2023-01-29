import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ButtonDevComponent } from './button.component';

@NgModule({
  declarations: [ButtonDevComponent],
  imports: [MatButtonModule, CommonModule],
  exports: [ButtonDevComponent],
})
export class ButtonDevModule {}
