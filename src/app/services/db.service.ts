import { first } from 'rxjs/operators';
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

    users.set({ id: id, name: name, userLists: { favourites: { "recipe-0": -1 } } });

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

      if (users.length > 0)
      {
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
      }
      else
        console.log(`No se encuentra el usuario!! ${ userId }`)
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

        idRecipes.push({ value: list[key] }["value"])

        subject.next(idRecipes);
      });
    })

    return subject;
  }

  addRecipeToCategory(idRecipe, category) {
    console.log(`users/${ this.getCurrentUserId() }/userLists`)

    // Obtenemos las listas de recetas de la categoria
    const itemsRef = this.db.list(`users/${ this.getCurrentUserId() }/userLists`);
    console.log(itemsRef['lenght']);

    let canInsert: boolean = true;
    let number;
    //  Ahora obtenemos la cantidad de recetas que tiene esta lista
    const lists = this.db.list(`users/${ this.getCurrentUserId() }/userLists/${ category }`).valueChanges();
    lists.subscribe((users) => {

      number = users.length

      let newIdRecipe = "recipe-" + number;
      console.log(newIdRecipe);

      // Creamos el objeto que va acontener el id de la receta
      let object = { newIdRecipe: parseInt(idRecipe) };

      // Modificamos la key del objeto para recipe-numero
      Object.defineProperty(object, newIdRecipe,
        Object.getOwnPropertyDescriptor(object, 'newIdRecipe'));
      delete object['newIdRecipe'];

      // Comprobamos si la receta ya esta en la lista
      for (let i = 0; i < users.length; i++)
      {
        if (users[i] == idRecipe)
        {
          canInsert = false;
        }
      }

      // Si ya existe la receta en la lista
      if (canInsert)
      {
        itemsRef.update(category, object);
        canInsert = false;
      }
    })
  }

  deleteRecipeFromCategory(idFirebase, idRecipe, category) {

    console.log(`users/${ this.getCurrentUserId() }/userLists/${ category }/${ idFirebase }`)

    // Con esto borramos la receta pero para este proyecto en lugar de borrar la receta la ocultamos
    //this.db.object(`users/69DHXLGnntbBAybMhU3TFROrb702/userLists/${ category }/${ idFirebase }`).remove();

    // Creamos el objeto que va acontener el id de la receta
    let object = { newIdRecipe: "-" + idRecipe };

    // Modificamos la key del objeto para recipe-numero
    Object.defineProperty(object, idFirebase,
      Object.getOwnPropertyDescriptor(object, 'newIdRecipe'));
    delete object['newIdRecipe'];

    console.log(object);

    const itemsRef = this.db.list(`users/${ this.getCurrentUserId() }/userLists`);
    itemsRef.update(category, object);

  }

  createNewRecipeList(listName) {
    const itemsRef = this.db.list(`users/${ this.getCurrentUserId() }`);

    let object = { listName: { "recipe-0": "0" } };

    // Modificamos la key del objeto
    Object.defineProperty(object, listName,
      Object.getOwnPropertyDescriptor(object, 'listName'));
    delete object['listName'];

    console.log(object)

    itemsRef.update("userLists", object);
  }

  deleteRecipeList(listName) {
    console.log(`users/${ this.getCurrentUserId() }/userLists/${ listName }`)
    this.db.object(`users/${ this.getCurrentUserId() }/userLists/${ listName }`).remove();
  }

  getCurrentUser() {
    let userAuth = this.afAuth.authState.pipe(first()).toPromise();
    userAuth.then(u => {

      // Guardamos en localStorage el id y email del usuario actual
      if (u && u['uid']) localStorage.setItem('currentUser', JSON.stringify({ id: u['uid'], email: u['email'] }));
      return u;
    })
    return userAuth;
  }

  getCurrentUserId() {
    this.getCurrentUser();
    return JSON.parse(localStorage.getItem('currentUser'))['id'];
  }
}
