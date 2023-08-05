import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Home from './components/home/Home';
import Categorie from './components/categorie/Categorie';
import { LoginAdmin } from './components/admin/login/LoginAdmin';

const routes: Routes = [
  {path:"",redirectTo:"/loginadmin",pathMatch:"full"},
  {path:"home",component:Home},
  // categorie
  {path:"categorie",component:Categorie},
  // login
  {path:"loginadmin",component:LoginAdmin}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
