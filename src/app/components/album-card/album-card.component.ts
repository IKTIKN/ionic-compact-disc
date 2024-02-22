import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { CountryFlag } from 'src/app/interfaces/CountryFlag';
import { Result } from 'src/app/interfaces/SearchResponse';
import { CommonService } from 'src/app/services/common/common.service';
import { CountryService } from 'src/app/services/country/country.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
  @Input() result!: Result;
  private router: Router = inject(Router);
  private country: CountryService = inject(CountryService);
  common: CommonService = inject(CommonService);

  flags!: CountryFlag[];
  formattedSearchResult!: string;

  constructor() { }

  ngOnInit() {
    this.formattedSearchResult = this.formatSearchResult(this.result);
    this.flags = this.country.getCountryFlags(this.result.country);
  }

  private formatSearchResult(result: Result): string {
    console.log(result.genre)
    const genre = this.common.formatArray(result.genre);
    const format = this.common.formatArray(result.format);
    const year = result.year ? `| ${result.year}` : '';
    return `${genre} | ${format} ${year}`;
  }

  navigateToReleaseDetail() {
    this.router.navigate(['/', 'album-detail', { coverImg: this.result.cover_image, releaseId: this.result.id }]);
  }

  isLast(countryFlag: CountryFlag): boolean {
    return this.flags.at(this.flags.length - 1) === countryFlag;
  }
}
