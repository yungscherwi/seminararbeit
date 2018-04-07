import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-important-item-detail',
  templateUrl: 'important-item-detail.html',
})
export class ImportantItemDetailPage {

    title;
    description;
    adress;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public dataService: Data,
                public view: ViewController) {
    }

    ionViewDidLoad() {
      this.title = this.navParams.get('importantItem').title;
      this.description = this.navParams.get('importantItem').description;
      this.adress = this.navParams.get('importantItem').adress;
    }

    deleteImportantItem(){
      this.dataService.deleteImportant(this.navParams.get('importantItem'));
      this.view.dismiss();
    }


  }
