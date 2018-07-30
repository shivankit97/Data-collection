import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';


@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    LoginComponent,
    DashboardComponent,
    AddPublisherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
