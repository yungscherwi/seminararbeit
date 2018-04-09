import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-navigate-me',
  templateUrl: 'navigate-me.html',
})
export class NavigateMePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private launchNavigator: LaunchNavigator,
              public view: ViewController,
              public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
  }

  close() {
    this.view.dismiss();
  }

  startNavigation(address){
    this.launchNavigator.navigate(address).then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );

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
