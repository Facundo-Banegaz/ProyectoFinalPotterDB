import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFountComponent } from './Components/not-fount/not-fount.component';



const routes: Routes = [
  {path:"home", loadChildren:()=>import("./Pages/home/home.module").then(b => b.HomeModule)},
  {path:"books", loadChildren:()=>import("./Pages/books/books.module").then(b => b.BooksModule)},
  {path:"characters", loadChildren:()=>import("./Pages/characters/characters.module").then(b => b.CharactersModule)},
  {path:"movies", loadChildren:()=>import("./Pages/movies/movies.module").then(b => b.MoviesModule)},
  {path:"potions", loadChildren:()=>import("./Pages/potions/potions.module").then(b => b.PotionsModule)},
  { path:"spells", loadChildren:()=>import("./Pages/spells/spells.module").then(b => b.SpellsModule)},
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {path:"**", component:NotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
