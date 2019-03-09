import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NavBarComponent} from './nav/navbar.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { ProductComponent } from './Home/products/products.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './Home/contact/contact.component';
import { ClientsComponent } from './Home/clients/clients.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponentComponent,
    ProductComponent,
    AboutUsComponent,
    FooterComponent,
    ContactComponent,
    ClientsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
