import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authSvc: AuthService, private router: Router) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }

    let authObs: Observable<AuthResponseData>;
    if(this.isLoginMode) {
      authObs = this.authSvc.login(form.value.email, form.value.password);
    } else {
      this.isLoading = true;
      authObs = this.authSvc.signup(form.value.email, form.value.password);

    }

    authObs.subscribe((response) => {
      this.isLoading = false;
      this.router.navigate(['/recipe-list']);
    }, (errorMessage) => {

      this.isLoading = false;
      this.error = errorMessage;

    });
    form.reset();
  }

  onHandleError() {
    this.error = '';
  }
}
