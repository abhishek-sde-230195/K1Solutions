import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponentComponent} from '../app/Home/home-component/home-component.component';
import{ContactComponent} from '../app/Home/contact/contact.component';
import {AboutUsComponent} from '../app/Home/about-us/about-us.component';
import {ProductComponent} from '../app/Home/products/products.component';
import {ClientsComponent} from '../app/Home/clients/clients.component';
const routes : Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutUsComponent},
  {path:'product', component:ProductComponent},
  {path:'clients', component:ClientsComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
]

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

