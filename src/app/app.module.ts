import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';

import { FairsDashboardComponent } from './components/fairs-dashboard/fairs-dashboard.component';
import { AppRoutingModule } from "src/app/routing/routing";
import { UsersDashboardComponent } from './components/users-dashboard/users-dashboard.component';
import { MaterialModule } from './modules/material/material.module';
import { ProductsFormComponent } from './components/products-form/products-form.component';

import { UsersFormComponent } from './components/users-form/users-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { GetconfirmComponent } from './components/getconfirm/getconfirm.component';
import {MatDialogModule } from "@angular/material/dialog";
import { ProductDetailsComponent } from './components/product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeDashboardComponent,
  
    ProductsDashboardComponent,
    UsersDashboardComponent,
    FairsDashboardComponent,
    ProductsFormComponent,
   
    UsersFormComponent,
    UserComponent,
    GetconfirmComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
