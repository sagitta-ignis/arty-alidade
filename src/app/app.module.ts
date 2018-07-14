import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
      {
        path: 'coordinates',
        loadChildren: './coordinates/coordinates.module#CoordinatesModule'
      },
      {
        path: '**', redirectTo: 'coordinates', pathMatch: 'full'
      }
    ]),

    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
