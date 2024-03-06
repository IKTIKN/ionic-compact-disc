import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterReponse } from 'src/app/interfaces/MasterResponse';
import { ReleaseResponse } from 'src/app/interfaces/ReleaseResponse';
import { SearchResponse } from 'src/app/interfaces/SearchResponse';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class DiscogsService {
  private httpClient: HttpClient = inject(HttpClient);
  private settings: SettingsService = inject(SettingsService);

  private baseUrl: string = 'https://api.discogs.com';
  private token!: string;

  constructor() {
    this.token = this.settings.getDiscogsToken();
  }

  // HTTP GET: /database/search?q={query}
  getSearchResult(barcode: string): Observable<SearchResponse> {
    const endpoint = `${this.baseUrl}/database/search?q=${barcode}&token=${this.token}`;
    return this.httpClient.get<SearchResponse>(endpoint);
  }

  // HTTP GET: /masters/{master_id}
  getMaster(masterId: string): Observable<MasterReponse> {
    const endpoint = `${this.baseUrl}/masters/${masterId}`;
    return this.httpClient.get<MasterReponse>(endpoint);
  }

  // HTTP GET: /releases/{release_id}{?curr_abbr}
  getRelease(releaseId: string): Observable<ReleaseResponse> {
    const endpoint = `${this.baseUrl}/releases/${releaseId}?curr_abbr=EUR`;
    return this.httpClient.get<ReleaseResponse>(endpoint);
  }

}
