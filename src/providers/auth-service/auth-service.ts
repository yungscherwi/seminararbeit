import { HttpClient } from '@angular/common/http'; //hier stand noch headers entfernt, da nicht beutzt
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

let apiUrl = "http://localhost:8888/PHP-Slim-Restful/api/"; //Anbindung an die Datenbank über api
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
//Funktion. Nicht wirklich verstanden
postData(credentials, type) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

}
