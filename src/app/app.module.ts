import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WebcamModule } from 'ngx-webcam';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxLoadingModule } from 'ngx-loading';


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
  MatBadgeModule,
  MatIconModule
} from '@angular/material';
import { LoanComponent } from './components/loan/loan.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ReturnComponent } from './components/return/return.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanComponent,
    HeaderComponent,
    ReturnComponent
  ],
  imports: [
    MatIconModule,
    MatBadgeModule,
    BrowserAnimationsModule,
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
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left'
    }),
    NgxLoadingModule.forRoot({})
  ],
  providers: [HeaderComponent,
    HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
