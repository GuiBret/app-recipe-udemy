import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  user = new BehaviorSubject<User>(null);
  signup(email: string, password: string) {
    const data = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyBxZT37qPJoW-fALexdLSr2mDfzbBJ89Zo', data)
                    .pipe(
                      catchError(this.handleError.bind(this)),
                      tap((resData) => {
                        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
                      }));
  }

  login(email: string, password: string) {
    const data = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyBxZT37qPJoW-fALexdLSr2mDfzbBJ89Zo', data)
                    .pipe(
                      catchError(this.handleError.bind(this)),
                      tap((resData: AuthResponseData) => {
                        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);

                      })
                    );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured !';
    console.log(errorRes);
    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    } else {
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':

          errorMessage = 'This email exists already'
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exist';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'This password is incorrect';
          break;
      }

    }


    return throwError(errorMessage);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expDate);

    this.user.next(user);
  }

  logout() {
    this.user.next(null);

    this.router.navigate(['/auth']);
  }
}
