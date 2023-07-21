import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInValue = false;
  private currentUser: any;

  constructor() { }

  isLoggedIn() {
    return this.isLoggedInValue;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
