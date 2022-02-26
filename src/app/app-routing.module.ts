import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageCountriesGridComponent } from './pages/authenticated/main-page-countries-grid/main-page-countries-grid.component';
import { IndividualCountryComponent } from './pages/authenticated/individual-country/individual-country.component';
import { PageNotFoundComponent } from './pages/authenticated/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: "countries", component: MainPageCountriesGridComponent},
  {path: "countries/:countryId", component: IndividualCountryComponent},
  {path: "", redirectTo: '/countries', pathMatch: 'full'}, 
  {path: "**", pathMatch: "full", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
