import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PotionsComponent } from './potions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "potions", component: PotionsComponent }
];
@NgModule({
  declarations: [
    PotionsComponent
  ],
    imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PotionsModule { }
