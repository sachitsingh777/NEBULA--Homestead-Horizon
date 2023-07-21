import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupData = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSignupSubmit() {
    // For simplicity, we'll assume the signup is successful without actual authentication.
    console.log('Signup data:', this.signupData);
  }
}
