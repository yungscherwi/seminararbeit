import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-weekly-item-detail',
  templateUrl: 'weekly-item-detail.html',
})
export class WeeklyItemDetailPage {

  title;
  description;
  start;
  end;
  day;
  adress;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: Data,
              public view: ViewController){
  }

  ionViewDidLoad() {
    //Gibt jeweilige Teile der übergebenen Objekts zurück
    this.title = this.navParams.get('weeklyItem').title;
    this.description = this.navParams.get('weeklyItem').description;
    this.start = this.navParams.get('weeklyItem').start;
    this.end = this.navParams.get('weeklyItem').end;
    this.day = this.navParams.get('weeklyItem').day;
    this.adress = this.navParams.get('weeklyItem').adress;
  }

  deleteWeeklyItem(){
    //führt Funktion Löschfunktion im Provider Data aus
    this.dataService.deleteWeekly(this.navParams.get('weeklyItem'));
    this.view.dismiss();
  }

}
