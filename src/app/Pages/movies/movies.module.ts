import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "movies", component: MoviesComponent }
];

@NgModule({
  declarations: [
    MoviesComponent
  ],
    imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesModule { }
