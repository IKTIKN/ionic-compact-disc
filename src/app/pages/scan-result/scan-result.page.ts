import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmptyPageMessage } from 'src/app/interfaces/EmptyPageMessage';
import { Result } from 'src/app/interfaces/SearchResponse';
import { DiscogsService } from 'src/app/services/discogs/discogs.service';

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.page.html',
  styleUrls: ['./scan-result.page.scss'],
})
export class ScanResultPage implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private discogs: DiscogsService = inject(DiscogsService);

  barcode: string | null = null;
  results: Result[] = [];
  isSearching: boolean = true;
  
  emptyPageMessage!: EmptyPageMessage;
  
  constructor() { }

  ngOnInit() {
    this.barcode = this.route.snapshot.paramMap.get('barcode');
    if (this.barcode) {
      this.discogs.getSearchResult(this.barcode)
      .subscribe((response) => {
        this.results = this.filterResults(response.results);
        if (!this.results.length && this.barcode) {
          this.emptyPageMessage = { title: '404', text: this.barcode };
        }
        this.isSearching = false;
      });
    }
    else {
      this.emptyPageMessage = { title: 'Could not detect a barcode', text: 'Please scan again' };
      this.isSearching = false;
    }
  }

  private filterResults(results: Result[]): Result[] {
    let filteredResults: Result[] = [];
    results.forEach((result) => {
      const img = result.cover_image;
      if (img.substring(img.length - 4) != '.gif') {
        filteredResults.push(result)
      }
    });
    return filteredResults;
  }

  formatTitle(): string {
    const total = this.results.length;
    if (total) {
      const s = total > 1 ? 's' : ''
      return `${total} Release${s}`;
    } else {
      return 'No results'
    }
  }

}
