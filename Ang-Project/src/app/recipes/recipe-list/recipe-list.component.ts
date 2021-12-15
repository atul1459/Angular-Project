import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe','Test Desc','https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.immediate.co.uk%2Fproduction%2Fvolatile%2Fsites%2F30%2F2020%2F08%2Fchorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg%3Fquality%3D90%26resize%3D556%2C505&imgrefurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&tbnid=szRpvsGF2Q_DAM&vet=12ahUKEwjojrrkv-b0AhXiiOYKHTJhC48QMygAegUIARDjAQ..i&docid=0MYkDl3kvGAUTM&w=556&h=505&q=recipe&ved=2ahUKEwjojrrkv-b0AhXiiOYKHTJhC48QMygAegUIARDjAQ')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
