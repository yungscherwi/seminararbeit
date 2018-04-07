import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-weekly-item',
  templateUrl: 'add-weekly-item.html',
})
export class AddWeeklyItemPage {

    title: string;
    description: string;
    day: string;
    adress: string;
    start: string;
    end: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public view: ViewController) {
    }

    saveWeeklyItem(){

      let newWeeklyItem = {
        title: this.title,
        description: this.description,
        day: this.day,
        adress: this.adress,
        start: this.start,
        end: this.end,

      };

      this.view.dismiss(newWeeklyItem);

    }

    close() {
      this.view.dismiss();
  }

  }
