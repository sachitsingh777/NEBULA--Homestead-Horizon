import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onLoginSubmit() {
    // For simplicity, we'll assume the login is successful without actual authentication.
    console.log('Login data:', this.loginData);
  }
}

