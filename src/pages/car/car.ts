import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: Data, //dataService aufrufen, damit der abgespeicherte Wert für das aktuelle Auto auf allen Seiten verfügbar ist
              public view: ViewController, //ViewControler wird für dismiss Funktion benötigt
              public alertCtrl: AlertController) {
  }
//Zum speichern des ausgewählten Fahruezg aus der Liste
  selectModel_S100D(){
    this.dataService.current_car = "Model S 100D"; //Setzt aktuelles Auto auf ausgewählten Wert
    this.view.dismiss(); //Nachdem ein Auto ausgewählt wurde zurück gelangt man wieder ins Tutorial
  }
  selectModel_S75D(){
  this.dataService.current_car = "Model S 75D"; //wie oben, gleiche Funktionsweise bei folgenden Methoden
  let alert = this.alertCtrl.create({   //Erstellt den Auszugebebenen Warhinweis
    title: 'Ihr Auto wurde erfolgreich ausgewählt',
    //subTitle: 'Benutzername oder Passwort falsch!',
    buttons: ['OK']
  });
  alert.present();  //Aufruf der Fehlermeldung
  this.view.dismiss();
  }
  selectModelX(){
  this.dataService.current_car = "Model X 100D";
  this.view.dismiss();
  }
  selectEnvalia(){
  this.dataService.current_car = "e-NV200 Envalia";
  this.view.dismiss();
  }
  selectLeaf(){
  this.dataService.current_car = "Leaf";
  this.view.dismiss();
  }
  selecti3(){
  this.dataService.current_car = "i3";
  this.view.dismiss();
  }
  selectBerlingo(){
  this.dataService.current_car = "Berlingo Electric";
  this.view.dismiss();
  }
  selectCZero(){
  this.dataService.current_car = "C-Zero";
  this.view.dismiss();
  }


  ionViewDidLoad() {
  }

}
