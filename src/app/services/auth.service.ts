import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { DbService } from './db.service';
import { Observable } from 'rxjs';
import auth from 'firebase';
import { AppService } from './app.service';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { Router } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public afAuth: AngularFireAuth, public dbService: DbService, private appService: AppService, private router: Router) {

    // Como obtener un usuario
    // let user = this.dbService.getUser("69DHXLGnntbBAybMhU3TFROrb702")
    // 
    // user.subscribe(user => {
    // console.log(JSON.parse(user));
    // })
    // 

    // let list = appService.getFavouritesRecipeFromUser("69DHXLGnntbBAybMhU3TFROrb702")
    // console.log(list);

  }

  // Logueamos y guardamos el usuario en bd.currentUser
  async login(email: string, password: string) {

    try
    {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);

      let user = this.dbService.getUser(result["user"].uid);

      user.subscribe(user => {
        this.dbService.currentUser = JSON.parse(user);
      })

      NavbarComponent.loguede = true;
      localStorage.setItem('logued', "true");

      console.log(localStorage.getItem('logued'));
      console.log("NavbarComponent.loguede");
      console.log(NavbarComponent.loguede);

      // Navegamos
      this.router.navigate(['/profile'])

    }
    catch (err)
    {
      if (err.code === 'auth/user-not-found')
      {
        LoginComponent.userNotFound = true;
        LoginComponent.wrongPassword = false;
        console.log(err.code);
      }
      if (err.code === 'auth/wrong-password')
      {
        LoginComponent.wrongPassword = true;
        LoginComponent.userNotFound = false;
        console.log(err.code);
      }
    }
  }

  async logout() {
    try
    {
      await this.afAuth.signOut();
      localStorage.setItem('logued', "false");
    }
    catch (err)
    {
      console.log(err);
    }
  }

  async register(email: string, password: string) {
    try
    {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password)

      // hacer un update y poner el nombre del user

      return result;
    }
    catch (error)
    {
      if (error.code === 'auth/email-already-in-use')
        return error.code;
    }
  }

  // getCurrentUser() {
  // let userAuth = this.afAuth.authState.pipe(first()).toPromise();
  // userAuth.then(u => {
  // 
  // Guardamos en localStorage el id y email del usuario actual
  // localStorage.setItem('currentUser', JSON.stringify({ id: u['uid'], email: u['email'] }));
  // return u;
  // })
  // return userAuth;
  // }
  // 
  // getCurrentUserId() {
  // this.getCurrentUser();
  // return JSON.parse(localStorage.getItem('currentUser'))['id'];
  // }
}

