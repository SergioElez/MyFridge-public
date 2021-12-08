import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';

import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // variables del registro
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
  })

  // Variables para mostrar mensajes de error en el registro
  submit = false;
  sameEmail = false;
  wrongFields = true;
  wrongEmail = true;
  wrongPasswords = true;
  wrongPasswordsLength = true;

  constructor(
    private authService: AuthService,
    private dbService: DbService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async onRegister() {
    const { name, email, password } = this.registerForm.value;

    if (this.validRegister())
    {
      var user = await this.authService.register(email, password);

      // Si ya existe un usuario con el mismo correo muestra un mensaje
      if (user === 'auth/email-already-in-use')
      {
        this.wrongFields = false;
        this.wrongEmail = false;
        this.wrongPasswords = false;
        this.wrongPasswordsLength = false;
        this.sameEmail = true;
      }
      else
      {
        this.dbService.createUser({ id: user["user"].uid, name: name, email: email });

        // Navegar a perfil
        this.router.navigate(['/profile'])
      }

    }
  }

  // Clausula de guarda para comprobar que los campos son correctos
  // Digamos que son como muros de contencion
  validRegister() {
    const { name, email, password, password2 } = this.registerForm.value;
    this.submit = true;

    // Campos vacios
    if (name === '' || email === '' || password === '' || password2 === '')
    {
      // Modifico las demas varibles par que no salgan todos los mensajes a la vez
      this.wrongFields = true;
      this.wrongEmail = false;
      this.wrongPasswords = false;
      this.wrongPasswordsLength = false;
      return false;
    }

    // Email valido
    if (!this.validateEmail(email))
    {
      this.wrongFields = false;
      this.wrongEmail = true;
      this.wrongPasswords = false;
      this.wrongPasswordsLength = false;
      return false;
    }

    // Contraseñas iguales
    if (password !== password2)
    {
      this.wrongFields = false;
      this.wrongEmail = false;
      this.wrongPasswords = true;
      this.wrongPasswordsLength = false;
      return false;
    }

    // Contraseñas minimo 6 caracteres
    if (password.length < 6 && password2.length < 6)
    {
      this.wrongFields = false;
      this.wrongEmail = false;
      this.wrongPasswords = false;
      this.wrongPasswordsLength = true;
      return false;
    }

    this.wrongFields = false;
    this.wrongEmail = false;
    this.wrongPasswords = false;
    this.wrongPasswordsLength = false;

    return true;
  }

  // Copiado de https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
