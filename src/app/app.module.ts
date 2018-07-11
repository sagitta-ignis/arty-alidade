import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatButtonModule,

  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatTabsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatBadgeModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatButtonModule,

    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,

    MatTabsModule,
    MatExpansionModule,
    MatBadgeModule,

    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
