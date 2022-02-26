import { Component } from '@angular/core';
import { CountriesRestApiResponseModel } from './../../../shared/models/countries-rest-api-response.model';
import { GetApiCountriesService } from './../../../shared/services/get-api-countries.service';

@Component({
  selector: 'app-main-page-countries-grid',
  templateUrl: './main-page-countries-grid.component.html',
  styleUrls: ['./main-page-countries-grid.component.scss']
})
export class MainPageCountriesGridComponent {

  countries: CountriesRestApiResponseModel[] = [];

  constructor(public getCountriesService: GetApiCountriesService){
    this.getCountriesService.getCountries().subscribe(response => {
      this.countries = response;
      console.log(this.countries)
    })
  }

}
