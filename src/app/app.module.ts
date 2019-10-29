import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { MatDatepickerModule, MatNativeDateModule, MatDialogRef } from '@angular/material';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { CookieService } from 'ng2-cookies';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  providers: [MatDatepickerModule,{provide: MatDialogRef}, CookieService],
  entryComponents: [RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
