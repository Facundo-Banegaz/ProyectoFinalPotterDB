import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsComponent } from './spells.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "spells", component: SpellsComponent }
];

@NgModule({
  declarations: [
    SpellsComponent
  ],
   imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class SpellsModule { }
