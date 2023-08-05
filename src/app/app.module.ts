import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './app.primeng.module';
import Home from './components/home/Home';
import NavAdmin from './components/navadmin/NavAdmin';
import Categorie from './components/categorie/Categorie';
import ListCategorie from './components/categorie/ListCategorie';
import { LoginAdmin } from './components/admin/login/LoginAdmin';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    NavAdmin,
    Categorie,
    ListCategorie,
    LoginAdmin
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
