import { Component } from '@angular/core';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  originalData: any;
  carData: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              ) {


  this.originalData = [
    {brand: 'Nissan', model: 'e-NV200 Evalia', battery: '40 kWh', distance: 200, socketType: 'CHAdeMO, Typ 1'},
    {brand: 'Nissan', model: 'Leaf', battery: '40 kWh', distance: 378, socketType: 'CHAdeMO, Type 2'},
    {brand: 'Tesla', model: 'Model 3', battery: '50 kWh', distance: 444, socketType: 'Supercharger, Typ 2'},
    {brand: 'Tesla', model: 'S 100D', battery: '100 kWh', distance: 632, socketType: 'Supercharger, Typ 2'},
  ]
  this.carData = JSON.parse(JSON.stringify(this.originalData));
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    //this.filterData();
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  startApp() {
  this.navCtrl.push(TabsPage);
  }
  /*filterData(){
    this.carData = this.carData.filter((car) => {
     return car.brand != car.brand;
  )};
 }
*/
}
