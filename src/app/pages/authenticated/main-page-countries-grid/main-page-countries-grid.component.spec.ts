import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCountriesGridComponent } from './main-page-countries-grid.component';

describe('MainPageCountriesGridComponent', () => {
  let component: MainPageCountriesGridComponent;
  let fixture: ComponentFixture<MainPageCountriesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageCountriesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCountriesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
