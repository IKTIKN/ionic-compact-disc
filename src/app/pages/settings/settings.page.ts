import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  authService: AuthService = inject(AuthService);

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  deleteAccount() {
    //TODO Delete account from settings
  }
}
