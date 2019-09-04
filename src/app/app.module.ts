import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MadewithangularComponent } from './madewithangular/madewithangular.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
 
import{ HttpClientModule } from '@angular/common/http';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactComponent } from './contact/contact.component';
import * as $ from 'jquery';
 
@NgModule({
  declarations: [
    AppComponent,
    MadewithangularComponent,
    AboutComponent,
    HomeComponent,
    MyworkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
 
