import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { CountryService } from './services/country/country.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  authService = inject(AuthService);
  country: CountryService = inject(CountryService);

  public appPages = [
    { title: 'Collection', url: '/collection', icon: 'musical-notes' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Wishlist', url: '/folder/favorites', icon: 'bookmark' },
    { title: 'Search', url: '/folder/trash', icon: 'search' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
  ];

  constructor() {}
}
