import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password);
    this.router.navigate(['/profile'])
    NavbarComponent.logued = true;
    console.log(this.loginForm.value);
  }

}
