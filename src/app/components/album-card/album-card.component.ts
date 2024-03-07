import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CountryFlag } from 'src/app/interfaces/CountryFlag';
import { Result } from 'src/app/interfaces/apiresponses/SearchResponse';
import { CommonService } from 'src/app/services/common/common.service';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
  @Input() result!: Result;
  private router: Router = inject(Router);
  country: CountryService = inject(CountryService);
  common: CommonService = inject(CommonService);
  flags!: CountryFlag[];
  formattedSearchResult!: string;

  constructor() { }

  ngOnInit() {
    this.formattedSearchResult = this.formatSearchResult(this.result);
    this.flags = this.country.getCountryFlags(this.result.country);
  }

  private formatSearchResult(result: Result): string {
    const genre = this.common.formatArray(result.genre);
    const format = this.common.formatArray(result.format);
    const year = result.year ? `| ${result.year}` : '';
    return `${genre} | ${format} ${year}`;
  }

  navigateToReleaseDetail() {
    this.router.navigate(['/', 'album-detail', { coverImg: this.result.cover_image, releaseId: this.result.id }]);
  }

}
