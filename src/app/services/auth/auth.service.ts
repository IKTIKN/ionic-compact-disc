import { Injectable, inject } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);

  private googleAuthProvider = new GoogleAuthProvider();

  // Observable user
  user$ = user(this.auth);

  // Observable error 
  private errorMessage = "";
  errorMessage$ = of(this.errorMessage);

  constructor() { }

  private errorHandler(error: FirebaseError): string {
    switch (error.code) {
      case "auth/invalid-email":
        return "The given email address is not valid."

      case "auth/user-disabled":
        return "The user corresponding to the given email has been disabled."

      case "auth/user-mismatch":
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
      case "auth/invalid-login-credentials":
        return "The given credentials are incorrect, please try again!"

      case "auth/weak-password":
        return "The password is not strong enough."

      case "auth/email-already-in-use":
        return "There already exists an account with the given email address."

      case "auth/operation-not-allowed":
        return "Email/password accounts are not enabled."

      case "auth/requires-recent-login":
        return "Please login again to perform this operation."

      case "auth/too-many-requests":
        return "Hold up wait a minute... You are making too many requests!"

      default:
        return "Something went wrong, please try again!"
    }
  }

  login(email: string, password: string): void {
    signInWithEmailAndPassword(this.auth, email, password).then((result) => {
      const credential = result.user;
      this.router.navigate(['/', 'collection']);
      return credential;
    }).catch((error) => {
      this.errorMessage = this.errorHandler(error);
      console.log('ERROR: ' + this.errorMessage)
    });
  }

  loginWithGoogle(): void {
    signInWithPopup(this.auth, this.googleAuthProvider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      this.router.navigate(['/', 'collection']);
      return credential;
    }).catch((error) => {
      this.errorMessage = this.errorHandler(error);
    });
  }

  signup(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then((result) => {
      const credential = result.user;
      this.router.navigate(['/', 'collection']);
      return credential;
    }).catch((error) => {
      this.errorMessage = this.errorHandler(error);
    });
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/', 'login'])
    }).catch((error) => {
      this.errorMessage = this.errorHandler(error);
    });
  }

  deleteAccount() {
    //TODO Delete account from firebase
  }
}
