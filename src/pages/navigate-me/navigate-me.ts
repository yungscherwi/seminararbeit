import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-navigate-me',
  templateUrl: 'navigate-me.html',
})
export class NavigateMePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private launchNavigator: LaunchNavigator,
              public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigateMePage');
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

}
