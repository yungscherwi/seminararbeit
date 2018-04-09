import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';


@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  title;
  description;
  start;
  end;
  adress;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: Data,
              public view: ViewController) {
  }

  ionViewDidLoad() {
    //Gibt jeweilige Teile der übergebenen Objekts zurück
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.start = this.navParams.get('item').start;
    this.end = this.navParams.get('item').end;
    this.adress = this.navParams.get('item').adress;
  }

  deleteItem(){
    //führt Funktion Löschfunktion im Provider Data aus
    this.dataService.delete(this.navParams.get('item'));
    this.view.dismiss();
  }


}
