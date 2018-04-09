import { Component } from '@angular/core';
import { AlertController, NavController, NavParams} from 'ionic-angular';
import { Data } from '../../providers/data/data';


@Component({
  selector: 'page-einstellungen',
  templateUrl: 'einstellungen.html',
})
export class EinstellungenPage {


  battery: number = this.battery;
  filter_active: boolean = this.filter_active; //Für die Prüfung ob Filter aktiviert werden sollen
  //Deklarieren von Variablen
  cars: any;
  car_information: string;
  car_battery: any;
  car_name: any;
  car_socketType: any;
  car_distance: any;

constructor(public navCtrl: NavController,
            public navParams: NavParams,
            public dataService: Data  //wird für Zugriff auf ausgewähltes Fahrzeug benötigt
            ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EinstellungenPage');
    this.setCar();
  }

    setCar(){
      //Im Array wird jeder Autotyp als Objekt mit den relevanten Informationen abgespeichert
      var cars = [
        {brand: 'Nissan', model: 'e-NV200 Evalia', battery: '40 kWh', distance: 200, socketType: 'CHAdeMO, Typ 1'},
        {brand: 'Nissan', model: 'Leaf', battery: '40 kWh', distance: 378, socketType: 'CHAdeMO, Typ 2'},
        {brand: 'Tesla', model: 'Model S 75D', battery: '75 kWh', distance: 490, socketType: 'Supercharger, Typ 2'},
        {brand: 'Tesla', model: 'S 100D', battery: '100 kWh', distance: '632', socketType: 'Supercharger, Typ 2'},
        {brand: 'Tesla', model: 'Model X 100D', battery: '100 kWh', distance: 565, socketType: 'Supercharger, Typ 2'},
        {brand: 'BMW', model: 'i3', battery: '33,2 kWh', distance: 312, socketType: 'CCS, Typ 2'},
        {brand: 'Citroen', model: 'Berlingo Electric', battery: '22,5 kWh', distance: 170, socketType: 'CHAdeMO, Typ 1'},
        {brand: 'Citroen', model: 'C-Zero', battery: '14,5 kWh', distance: 150, socketType: 'CHAdeMO, Typ 1'},
      ]
        var i = 0;
        for(i = 0 ;i < cars.length; i++){ //Schleife durchläuft das Auto Array
            if(cars[i].model == this.dataService.current_car){    //Gleicht Autos aus dem Array mit dem gespeicherten Fahrzeug ab
              this.car_name = cars[i].brand + ' ' + cars[i].model; //Greift auf Marke und Model des ausgewählten Objektes zu
              this.car_distance = cars[i].distance; //Greift auf Distanz zu
              this.car_battery = cars[i].battery;   //Greift auf Batterie zu
              this.car_socketType = cars[i].socketType; //Steckertyp
            }
        }
    }
 }
