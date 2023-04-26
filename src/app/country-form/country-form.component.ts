import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CovidApiService } from '../CovidApiService';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {
  countryList?: Country[]
  choosenCountry?: Country

  constructor(private apiService: CovidApiService) {}

  ngOnInit(): void {
      this.apiService.getCountries().subscribe(countries => {
        this.countryList = countries
      })
  }
}
