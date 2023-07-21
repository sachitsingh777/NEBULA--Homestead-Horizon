import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/services.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginData = {
    username: '',
    password: ''
  };

  isLoggedIn = false;
  currentUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.checkAuthStatus();
  }

  onLoginSubmit() {
    // For simplicity, we'll assume the login is successful without actual authentication.
    this.isLoggedIn = true;
    this.currentUser = { username: this.loginData.username };
  }

  onLogout() {
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  checkAuthStatus() {
    // Check authentication status and set the isLoggedIn and currentUser variables accordingly.
    // In a real-world scenario, you would implement proper authentication checks here.
    // For this example, we'll use a simple AuthService with isLoggedIn and currentUser properties.
    this.isLoggedIn = this.authService.isLoggedIn();
    this.currentUser = this.authService.getCurrentUser();
  }
}
