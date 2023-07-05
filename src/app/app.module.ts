import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './compnents/nav/nav.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './compnents/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeCartComponent } from './compnents/home-cart/home-cart.component';
import { CraftFormsSecComponent } from './compnents/craft-forms-sec/craft-forms-sec.component';
import { BulkOrderComponent } from './compnents/bulk-order/bulk-order.component';
import { SiteBtnComponent } from './compnents/bulk-order/site-btn/site-btn.component';
import { ExploreCollecComponent } from './compnents/explore-collec/explore-collec.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    HomeCartComponent,
    CraftFormsSecComponent,
    BulkOrderComponent,
    SiteBtnComponent,
    ExploreCollecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
