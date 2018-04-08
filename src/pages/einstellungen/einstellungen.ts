import { Component } from '@angular/core';
import { AlertController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-einstellungen',
  templateUrl: 'einstellungen.html',
})
export class EinstellungenPage {


  battery: number = this.battery;
  filter_active: boolean = this.filter_active; //Für die Prüfung ob Filter aktiviert werden sollen

constructor(public navCtrl: NavController,
            public navParams: NavParams,

          ) { }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EinstellungenPage');
    }

  }
