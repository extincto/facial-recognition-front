import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {WebcamModule} from 'ngx-webcam';

import {
  MatToolbarModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatGridListModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatChipsModule,
} from '@angular/material';
import { LoanComponent } from './components/loan/loan.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatGridListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatChipsModule,
    WebcamModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
