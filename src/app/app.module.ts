import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//Componentes
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { BooksModule } from './Pages/books/books.module';

//Modulos

import { CharactersModule } from './Pages/characters/characters.module';
import { HomeModule } from './Pages/home/home.module';
import { MoviesModule } from './Pages/movies/movies.module';
import { PotionsModule } from './Pages/potions/potions.module';
import { SpellsModule } from './Pages/spells/spells.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BooksModule,
    CharactersModule,
    HomeModule,
    MoviesModule,
    PotionsModule,
    SpellsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
