import {Component,OnInit } from '@angular/core';
import FetchHelper from 'src/app/helpers/FetchHelper';
import 'tslib';


@Component({
  selector:"ListCategorie",
  templateUrl:"./ListCategorie.html"
})

export default class ListCategorie{

  categories:any=[];

  ngOnInit(){
    FetchHelper.sendMethodGet("listg-Categorie")
    .then(res=>{
      this.categories=res;
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
