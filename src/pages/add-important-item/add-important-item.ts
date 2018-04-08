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

    let newImportantItem = {
      title: this.title,
      description: this.description,
      adress: this.adress
    };

    this.view.dismiss(newImportantItem);

  }

  close() {
    this.view.dismiss();
  }

  }
