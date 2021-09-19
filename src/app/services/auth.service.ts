import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(public afAuth: AngularFireAuth) {

  }

  async login(email: string, password: string) {

    try
    {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.user = this.afAuth.authState;
      console.log(this.user);

      return result;
    }
    catch (err)
    {
      console.log(err);
    }
  }

  async logout() {
    try
    {
      await this.afAuth.signOut();
    }
    catch (err)
    {
      console.log(err);
    }
  }

  async register(email: string, password: string) {
    try
    {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    }
    catch (err)
    {
      console.log(err);
    }
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}

