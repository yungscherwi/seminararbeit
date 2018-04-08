import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; //Für Alert
import { AddItemPage } from '../add-item/add-item';
import { AddWeeklyItemPage } from '../add-weekly-item/add-weekly-item';
import { AddImportantItemPage } from '../add-important-item/add-important-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { WeeklyItemDetailPage } from '../weekly-item-detail/weekly-item-detail';
import { ImportantItemDetailPage } from '../important-item-detail/important-item-detail';
import { Data } from '../../providers/data/data';


@Component({
  selector: 'page-mylife',
  templateUrl: 'mylife.html',
})
export class MylifePage {

  public mondayItems = [];
  public tuesdayItems = [];
  public wednesdayItems = [];
  public thursdayItems = [];
  public fridayItems = [];
  public saturdayItems = [];
  public sundayItems = [];

  public items = [];
  public weeklyItems = [];
  public importantItems = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public dataService: Data) {}

//Damit nach Löschen auch aktualisiert wird
  ionViewDidEnter() {


      this.dataService.getWeeklyDataMonday().then((mondayTodos) => {

        if(mondayTodos){
          this.mondayItems = mondayTodos;
        }
      });

      this.dataService.getWeeklyDataTuesday().then((tuesdayTodos) => {
        if(tuesdayTodos){
          this.tuesdayItems = tuesdayTodos;
        }
      });

      this.dataService.getWeeklyDataWednesday().then((wednesdayTodos) => {
        if(wednesdayTodos){
          this.wednesdayItems = wednesdayTodos;
        }
      });

      this.dataService.getWeeklyDataThursday().then((thursdayTodos) => {
        if(thursdayTodos){
          this.thursdayItems = thursdayTodos;
        }
      });

      this.dataService.getWeeklyDataFriday().then((fridayTodos) => {
        if(fridayTodos){
          this.fridayItems = fridayTodos;
        }
      });

      this.dataService.getWeeklyDataSaturday().then((saturdayTodos) => {
        if(saturdayTodos){
          this.saturdayItems = saturdayTodos;
        }
      });

      this.dataService.getWeeklyDataSunday().then((sundayTodos) => {
        if(sundayTodos){
          this.sundayItems = sundayTodos;
        }
      });

    //Für heutige Aktivitäten
    this.dataService.getData().then((todos) => {

      if(todos){
         this.items = JSON.parse(todos);
      }

    });

    //Für wichtige Adressen
    this.dataService.getImportantData().then((importantAdresses) => {

      if(importantAdresses){
         this.importantItems = JSON.parse(importantAdresses);
         console.log(this.importantItems);


      }


    });

  }

//**************** Wichtige Adressen - Funktionen ********************
addImportantItem(){

      let addModal = this.modalCtrl.create(AddImportantItemPage);

      addModal.onDidDismiss((importantItem) => {

            if(importantItem){
              this.saveImportantItem(importantItem);
            }

      });

      addModal.present();

      }

saveImportantItem(importantItem){
          this.importantItems.push(importantItem);
          this.dataService.saveImportant(this.importantItems);
}

viewImportantItem(importantItem){
    this.navCtrl.push(ImportantItemDetailPage, {
      importantItem: importantItem
    });
}
//**************** Wöchentliche Aktivitäten - Funktionen ********************

// fügt wöchentliche Aktivität über Modal zu
addWeeklyItem(){

        let addModal = this.modalCtrl.create(AddWeeklyItemPage);

        addModal.onDidDismiss((weeklyItem) => {

              if(weeklyItem){
                this.saveWeeklyItem(weeklyItem);
              }

        });

        addModal.present();

        }

//Pusht weeklyItem in die Liste und speichert es lokal
saveWeeklyItem(weeklyItem){
      this.weeklyItems.push(weeklyItem);
      this.dataService.saveWeekly(this.weeklyItems);
}

  // Zeige die Details des ausgewählten Items an
viewWeeklyItem(weeklyItem){
    this.navCtrl.push(WeeklyItemDetailPage, {
      weeklyItem: weeklyItem
    });

}


//**************** Heutige Aktivitäten - Funktionen ********************

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
