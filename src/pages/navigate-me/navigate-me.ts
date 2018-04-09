import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-navigate-me',
  templateUrl: 'navigate-me.html',
})
export class NavigateMePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public view: ViewController,
              public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
  }

  close() {
    this.view.dismiss();
  }


  showNavigationOptions() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Wähle deine Kartendienst',
    buttons: [
      {
        text: 'Google Maps',
        handler: () => {
          console.log('Destructive clicked');
        }
      },{
        text: 'Navigon',
        handler: () => {
          console.log('Archive clicked');
        }
      },{
        text: 'Abbrechen',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

}
