import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { ReleaseResponse } from 'src/app/interfaces/apiresponses/ReleaseResponse';
import { CountryService } from 'src/app/services/country/country.service';
import { CountryFlag } from 'src/app/interfaces/CountryFlag';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss'],
})
export class ReleaseComponent  implements OnInit {
  @Input() release!: ReleaseResponse;
  common: CommonService = inject(CommonService);
  country: CountryService = inject(CountryService);
  countryFlags!: CountryFlag[];

  constructor() { }
  
  ngOnInit() {
    this.countryFlags = this.country.getCountryFlags(this.release.country);
  }

}
