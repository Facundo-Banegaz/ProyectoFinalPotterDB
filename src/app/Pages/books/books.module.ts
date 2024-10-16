import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { CardComponent } from 'src/app/Components/card/card.component';

const routes: Routes = [
  {path:"books", component:BooksComponent},
];

@NgModule({
  declarations: [
    BooksComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class BooksModule { }
