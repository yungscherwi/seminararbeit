import { Component, ViewChild } from '@angular/core'; //ViewChild importieren, wird benötigt um auf HTML Datei zuzugreifen
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'; //AlertController importieren für Meldung
import { TabsPage } from '../tabs/tabs'; //Importieren um auf HomePage zu leiten 


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') username; //Zugriff auf Eingabe im Loginfenster
  @ViewChild('password') password; //Zugriff auf Eingabe im Loginfenster

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {  //AlertController wird vom Constructor aufgerufen
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  login_ready(){
    let usernameData = this.navParams.get('username');  //Abfrage Username vom Signup
    let passwordData = this.navParams.get('password');  //Abfrage Passwort vom Signup
      if(this.username.value == usernameData.value && this.password.value == passwordData.value){ //Abgleich Eingabe Login mit Daten aus Signup
        this.navCtrl.push(TabsPage); //Leitet nach Anmeldung auf HomePage
      }
      else {
        //Warnhinweis anzeigen, wenn Benutzername oder Passwort falsch ist
        let alert = this.alertCtrl.create({   //Erstellt den Auszugebebenen Warhinweis
          title: 'Fehler!',
          subTitle: 'Benutzername oder Passwort falsch!',
          buttons: ['OK']
        });
        alert.present();  //Aufruf der Fehlermeldung
      }
  }
}
