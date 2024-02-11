import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private authService: AuthService = inject(AuthService);
  private menu: MenuController = inject(MenuController);

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    terms: new FormControl(false, Validators.requiredTrue),
  });

  constructor() { }

  ionViewWillEnter() {
    this.menu.enable(false);
    this.signupForm.reset();
  }

  ionViewWillLeave() {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

  signupButtonClick() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    if (email && password) this.authService.signup(email, password);
  }

}
