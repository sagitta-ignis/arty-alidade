import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  MatDialogModule,

  MatFormFieldModule,
  MatInputModule,

  MatButtonModule
} from '@angular/material';

import { SpotterDialogComponent } from './spotter-dialog/spotter-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [SpotterDialogComponent],
  entryComponents: [SpotterDialogComponent]
})
export class PositionablesModule { }
