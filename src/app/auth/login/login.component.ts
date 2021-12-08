import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  wrongFields = false;
  wrongEmail = false;
  public static userNotFound = false;
  public static wrongPassword = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  // get para la varibale statica
  get userNotFound() {
    return LoginComponent.userNotFound;
  }

  // get para la varibale statica
  get wrongPassword() {
    return LoginComponent.wrongPassword;
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    const { email, password } = this.loginForm.value;
    if (email != '' && password != '')
    {
      if (this.validateEmail(email))
      {
        this.wrongEmail = false;
        this.wrongFields = false;
        this.authService.login(email, password)
      }
      else
      {
        this.wrongFields = false;
        this.wrongEmail = true;
      }
    }
    else
      this.wrongFields = true;


  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
