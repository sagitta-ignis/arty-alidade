import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatSidenavModule,
  MatTabsModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatDividerModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatButtonModule
} from '@angular/material';

import { CoordinatesComponent } from './coordinates.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '', component: CoordinatesComponent
      }
    ]),

    MatIconModule,
    MatButtonModule,

    MatSidenavModule,
    MatListModule,
    MatDividerModule,

    MatTabsModule,
    MatExpansionModule,
    MatToolbarModule,

    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  declarations: [CoordinatesComponent]
})
export class CoordinatesModule { }
