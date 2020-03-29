import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {  } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import{MatGridListModule}from '@angular/material';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrumComponent } from './crum/crum.component';
import { ProductionComponent } from './production/production.component';
import { SolutionComponent } from './solution/solution.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    DashboardComponent,
    CrumComponent,
    ProductionComponent,
    SolutionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatGridListModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
