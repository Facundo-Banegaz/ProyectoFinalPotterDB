import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "characters", component: CharactersComponent }
];


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CharactersModule { }
