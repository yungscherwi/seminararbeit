import { Component, ViewChild } from '@angular/core'; //View-Child importieren für Verbindung zu HTML
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  @ViewChild('name') name; //Stellt Verbindung zu den Eingabefenstern im HTML Code her
  @ViewChild('email') email;
  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup_ready(){ //Wird aufgerufen wenn signup bestätigt 
    let user = {  //legt ein Objekt mit den Benutzerdaten an
      name: this.name, //Speichert jeweils das eingegebene Element aus dem Anmeldefenster
      email: this.email,
      username: this.username,
      password: this.password
    }
    this.navCtrl.push(LoginPage, user); //Leitet nach dem Registrieren auf LoginPage und übergibt erfasste Nutzerdaten
  }


 }
