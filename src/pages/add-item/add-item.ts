import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  saveItem(){

    let newItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newItem);

  }

  close() {
    this.view.dismiss();
}

}
