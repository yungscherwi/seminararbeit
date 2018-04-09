import { Component, ViewChild } from '@angular/core'; //View-Child für Verbindung zu Slides in HTML 
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular'; //Slides
import { CarPage } from '../car/car';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;  //Verbindung zu Slides die in HTML aufgerufen werden

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
            ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  signup(){
    this.navCtrl.push(SignupPage); //ruft die Seite zum Registrieren auf
  }
  login(){
    this.navCtrl.push(LoginPage); //Zum überspringen des Tutorial ruft direkt Login auf
  }
  startApp() {
  this.navCtrl.push(TabsPage);  //nach erfolgreichem Login wird man auf die den Home Tab der App geleitet
  }
  startTut(){
    this.slides.slideNext();  //Zum Start des Tutorium auf nächste Seite leiten
  }
  carSelect(){
    this.navCtrl.push(CarPage); //Ruft eine Seite zum auswählen des eigenen Fahrzeuges auf
  }

}
