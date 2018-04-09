import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  close_tutorial(){
    this.navCtrl.push(TabsPage);

  }

}
