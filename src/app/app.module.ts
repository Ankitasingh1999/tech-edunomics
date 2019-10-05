import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
// mdb class
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { PartnersComponent } from './partners/partners.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { AffiliateProgrammeComponent } from './affiliate-programme/affiliate-programme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    BlogComponent,
    CasestudiesComponent,
    CareerComponent,
    ContactComponent,
    PartnersComponent,
    HowWeWorkComponent,
    AffiliateProgrammeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
