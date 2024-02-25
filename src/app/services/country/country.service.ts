import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Country } from 'src/app/interfaces/Country';
import { CountryFlag } from 'src/app/interfaces/CountryFlag';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private httpClient: HttpClient = inject(HttpClient);
  private countriesJson: string = 'assets/json/countries.json';
  countries: Country[] = [];

  constructor() {
    this.getCountries();
  }

  private getCountries(): void {
    this.httpClient.get<Country[]>(this.countriesJson)
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  // Return CountryFlag object(s) for the country string supplied by discogs API
  getCountryFlags(country: string): CountryFlag[] {
    const split: string[] = country.split(' ');
    let countryFlags: CountryFlag[] = [];
    split.forEach((s) => {
      for (let x = 0; x < this.countries.length; x++) {
        const c = this.countries[x];
        const code = c.code.toLowerCase();
        const name = c.name.toLowerCase();
        if (name === s.toLowerCase() || code === s.toLowerCase()) {
          countryFlags.push({country: c.name, flag: `assets/flags/${code}.png`});
          break;
        }
      }
    });
    return countryFlags;
  }
  
  isLast(flag: CountryFlag, flags: CountryFlag[]): boolean {
    return flags.at(flags.length - 1) === flag;
  }

}
