import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatSidenavModule,
} from '@angular/material';

import { FieldComponent } from './field.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '', component: FieldComponent
      }
    ]),

    MatSidenavModule
  ],
  declarations: [FieldComponent]
})
export class FieldModule { }
