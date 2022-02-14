import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesRestApiResponseModel } from './../models/countries-rest-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class GetApiCountriesService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<CountriesRestApiResponseModel[]>(
      "https://restcountries.com/v3.1/all"
    )
  }
}
