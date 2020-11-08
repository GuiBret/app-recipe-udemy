import { Component, OnDestroy, OnInit  } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  authSvcUser: Subscription;
  isAuthenticated: boolean = false;

  constructor(private httpService: HttpService, private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvcUser = this.authSvc.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true; // !! user
    });
  }

  ngOnDestroy() {
    this.authSvcUser.unsubscribe();
  }

  onSaveData() {
    this.httpService.storeRecipes();
  }

  onFetchData() {
    this.httpService.fetchRecipes().subscribe();
  }



}
