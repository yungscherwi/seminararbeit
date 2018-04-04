import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; //Für Alert
import { AddItemPage } from '../add-item/add-item';
import { AddWeeklyItemPage } from '../add-weekly-item/add-weekly-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data/data';


@Component({
  selector: 'page-mylife',
  templateUrl: 'mylife.html',
})
export class MylifePage {

  public items = [];
  public weeklyItems = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public dataService: Data) {

                this.dataService.getData().then((todos) => {

                  if(todos){
                     this.items = JSON.parse(todos);
                  }

                });
  }


  ionViewDidLoad() {

  }

  addWeeklyItem(){

    let addModal = this.modalCtrl.create(AddWeeklyItemPage);

    addModal.present();

    }



  addItem(){

    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {

          if(item){
            this.saveItem(item);
          }

    });

    addModal.present();

    }

    saveItem(item){
      this.items.push(item);
      this.dataService.save(this.items);
    }

    viewItem(item){
      this.navCtrl.push(ItemDetailPage, {
        item: item
      });
    }


}
