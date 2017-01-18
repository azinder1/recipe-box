import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Your Recipes</h1>
    <div  *ngFor="let currentRecipe of recipes">
      <h3> {{currentRecipe.title}}</h3>
      <p>{{currentRecipe.ingredients}}</p>
      <p>{{currentRecipe.steps}}
    </div>
  `
})

export class AppComponent{
  recipes: Recipe[] = [
    new Recipe('Pie', 'Pie Crust and pie filling', 'Make Crust, Make Pie'),
    new Recipe('Jelly Bean Soup', 'Water and Jelly Beans', 'Boil Water, Add Jelly Beans, Boil of 3 hours')
  ]
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public steps: string) { }
}
