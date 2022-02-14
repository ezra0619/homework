import { TestBed } from '@angular/core/testing';

import { GetApiCountriesService } from './get-api-countries.service';

describe('GetApiCountriesService', () => {
  let service: GetApiCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
