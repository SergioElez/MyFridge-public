import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})

export class DbService {
  users: Observable<any>;


  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) {

  }

  getUser(id: string) {
    // const items: AngularFireList<any> = this.db.list('users');
    // items.valueChanges().subscribe(
    // data => { this.users = data; }
    // );
  }


  createUser(user) {
    const { id, name, email } = user;
    const users = this.db.object('users/' + id);
    users.set({ name: name });

    console.log("Usuario creado: " + id + " mail: " + email)
  }
}
