import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'; //Importieren
import { TabsPage }from '../tabs/tabs';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""}; //Leeres Objetk zum Benutzer anlegen
  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider) { //AuthServer in Konstruktor aufrufen
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
   //Api connections
   signup(){
        this.authService.postData(this.userData,'signup').then((result) => {  //Zugriff auf DB
         this.responseData = result;
         if(this.responseData.userData){
         console.log(this.responseData);
         localStorage.setItem('userData', JSON.stringify(this.responseData)); //Zum lokalen Zwischenspeichern
         this.navCtrl.push(TabsPage); //Leitet nach Anmeldung auf HomePage
         }
         else{ console.log("User already exists"); }
       }, (err) => {
         // Error log
       });

     }

 login(){
   this.navCtrl.push(LoginPage);
 }
}
