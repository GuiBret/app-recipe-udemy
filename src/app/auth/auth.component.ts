import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppAlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../placeholder/placeholder.directive';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  @ViewChild(PlaceholderDirective, {static: false}) placeholderHost: PlaceholderDirective;

  constructor(private authSvc: AuthService, private router: Router, private cfr: ComponentFactoryResolver) {}
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

      this.showErrorAlert(errorMessage);

    });
    form.reset();
  }

  onHandleError() {
    this.error = '';
  }

  private showErrorAlert(errorMessage: string) {
    const alertCmpFactory = this.cfr.resolveComponentFactory(AppAlertComponent);
    const hostViewContainer = this.placeholderHost.viewContainerRef;

    hostViewContainer.clear();

    hostViewContainer.createComponent(alertCmpFactory);
  }
}
