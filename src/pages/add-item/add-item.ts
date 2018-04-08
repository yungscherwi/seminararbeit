import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  description: string;
  start: string;
  end: string;
  adress: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public view: ViewController) {
  }

  saveItem(){
//initialisiert zu speicherndes Objekt
    let newItem = {
      title: this.title,
      description: this.description,
      start: this.start,
      end: this.end,
      adress: this.adress
    };
//Fenster schließen und Objekt übergeben
    this.view.dismiss(newItem);

  }
//Fenster schließen
  close() {
    this.view.dismiss();
}

}
