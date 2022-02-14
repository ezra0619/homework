import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MainPageCountriesGridComponent } from './pages/authenticated/main-page-countries-grid/main-page-countries-grid.component';
import { IndividualCountryComponent } from './pages/authenticated/individual-country/individual-country.component';
import { PageNotFoundComponent } from './pages/authenticated/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageCountriesGridComponent,
    IndividualCountryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
