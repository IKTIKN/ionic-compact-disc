import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private authService = inject(AuthService);
  private menu: MenuController = inject(MenuController);
  private router: Router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor() { }

  ionViewWillEnter() {
    this.menu.enable(false);
    this.loginForm.reset();
  }

  ionViewWillLeave() {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

  loginButtonClick() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if (email && password) this.authService.login(email, password);
  }
}
