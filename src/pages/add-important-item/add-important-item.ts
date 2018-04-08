import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-add-important-item',
  templateUrl: 'add-important-item.html',
})
export class AddImportantItemPage {
  title: string;
  description: string;
  adress: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public view: ViewController) {
  }

  saveImportantItem(){
//initialisiert zu speicherndes Objekt
    let newImportantItem = {
      title: this.title,
      description: this.description,
      adress: this.adress
    };
//Fenster schließen und Objekt übergeben
    this.view.dismiss(newImportantItem);

  }

//Fenster schließen
  close() {
    this.view.dismiss();
  }

  }
