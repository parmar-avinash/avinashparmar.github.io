import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MadewithangularComponent } from './madewithangular/madewithangular.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
 
 
const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'madewithangular', component:MadewithangularComponent },
  { path:'mywork', component:MyworkComponent },
  { path:'about', component:AboutComponent },
  { path:'contact', component:ContactComponent }
 
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
