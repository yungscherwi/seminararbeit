import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; //Für Alert
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data/data';


@Component({
  selector: 'page-mylife',
  templateUrl: 'mylife.html',
})
export class MylifePage {

  public items = [];

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

/*PopUp für tägliche Aktivität
  addDailyActivity() {
    let prompt = this.alertCtrl.create({
      title: 'Aktivität hinzufügen',
      message: "Fügen Sie eine Aktivität hinzu",
      inputs: [
        {
          name: 'bezeichnung',
          placeholder: 'Bezeichnung'
        },
        {
          name: 'beschreibung',
          placeholder: 'Beschreibung'
        }
      ],
      buttons: [
        {
          text: 'Abbrechen',
          handler: data => {
            console.log('Abbrechen clicked');
          }
        },
        {
          text: 'Speichern',
          handler: data => {
            console.log(data); //Gibt eingegebenen Input aus
          }
        }
      ]
    });
    prompt.present();
}

//PopUp für wöchentliche Aktivität
  mondayActivity(){
    let prompt = this.alertCtrl.create({
      title: 'Aktivität hinzufügen',
      message: "Fügen Sie eine Aktivität hinzu",
      inputs: [
        {
          name: 'bezeichnung',
          placeholder: 'Bezeichnung'
        },
        {
          name:'beginn',
          placeholder: 'Beginn'
        },
        {
          name:'ende',
          placeholder: 'Ende'
        },
      ],
      buttons: [
        {
          text: 'Abbrechen',
          handler: data => {
            console.log('Abbrechen clicked');
          }
        },
        {
          text: 'Speichern',
          handler: data => {
            console.log('Speichern clicked');
          }
        }
      ]
    });
    prompt.present();
} */


}
