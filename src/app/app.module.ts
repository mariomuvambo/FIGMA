import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { footerComponent } from './components/footer/footer.component';
import { searchBarComponent } from './components/searchBar/searchBar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FiltroComponent } from './components/filtro/filtro.component';
import { CardsComponent } from './components/cards/cards.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    footerComponent,
    searchBarComponent,
    FiltroComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
