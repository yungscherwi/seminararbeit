import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service'; //Importieren
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""}; //Leeres Objetk zum Benutzer anlegen
  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  //API Connection für Login
  signup(){
        this.authServiceProvider.postData(this.userData,'signup').then((result) => {  //Zugriff auf DB
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


}
