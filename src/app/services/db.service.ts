import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

// class User {
// name: string;
// email: string;
// 
// User(name: string, email: string) {
// this.name = name;
// this.email = email;
// }
// }

export class DbService {

  // user: User = new User();

  public currentUser: Observable<object>;


  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) {

    // Pruebas
    // let recipelist = this.getRecipeAllListFromUser("69DHXLGnntbBAybMhU3TFROrb702")
    // 
    // recipelist.subscribe(user => {
    // console.log(user)
    // })




  }

  // Me daba problemas el obtener un usuario ya que no sabia devolver un observable correctamente
  // Esto me ha ayudado
  // https://stackoverflow.com/questions/49605090/how-to-return-value-inside-subscribe-angular-4
  getUser(id: string): Observable<any> {
    const users = this.db.list('users').valueChanges();

    var subject = new Subject<string>();

    users.subscribe((users) => {

      var user = users.find(user => user["id"] === id);
      console.log("USUARIO ENCONTRADO: ")
      console.log(user)

      subject.next(JSON.stringify(user));
      return user;

    })

    return subject.asObservable();

  }


  createUser(user) {
    const { id, name, email } = user;

    const users = this.db.object('users/' + id);
    users.set({ id: id, name: name });

    console.log("Usuario creado: " + id + " mail: " + email)

    let currentUser = this.getUser(id);

    currentUser.subscribe(user => {
      this.currentUser = JSON.parse(user);
      console.log("Usuario current")
      console.log(this.currentUser)
    })
  }

  getRecipeAllListFromUser(userId): Observable<Object> {
    const users = this.db.list(`users/${ userId }`).valueChanges();

    var idRecipes: Object[] = [];
    let idRecipeList: { length: number, idRecipes: Object[] };

    var subject = new Subject<Object>();

    users.subscribe((users) => {

      // poner try o if no es null
      let list = users[2];

      // Asi recorro un objeto
      // info en https://www.cloudhadoop.com/2018/08/typescript-how-to-convert-object-to.html
      Object.keys(list).map(function (key) {

        idRecipes.push({ [key]: list[key] })
        // console.log(idRecipes.length)

        idRecipeList = { length: idRecipes.length, idRecipes: idRecipes }
        // console.log(idRecipeList)

      });
      subject.next(idRecipeList);
    })

    return subject;

  }

  getRecipeListFromUser(userId, recipeName): Observable<string[]> {
    const users = this.db.list(`users/${ userId }`).valueChanges();

    var idRecipes: string[] = [];

    var subject = new Subject<string[]>();

    users.subscribe((users) => {

      // poner try o if no es null
      let list = users[2][recipeName];
      // console.log(list)

      // Asi recorro un objeto
      // info en https://www.cloudhadoop.com/2018/08/typescript-how-to-convert-object-to.html
      Object.keys(list).map(function (key) {

        // Con esto guardo los ids de las recetas de la lista con nombre X y del usuario X

        // console.log({ value: list[key] }["value"])
        idRecipes.push({ value: list[key] }["value"])

        subject.next(idRecipes);
      });
    })

    return subject;

  }
}
