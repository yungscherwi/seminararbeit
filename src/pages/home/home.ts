import { Component, ViewChild, ElementRef } from '@angular/core'; //ViewChild und ElementRef ergänzt
import { NavController } from 'ionic-angular';

declare var google: any; //Keine Errors mit google als variable
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapRef: ElementRef; //Verbindung zum map Element
  map: any;
  constructor(public navCtrl: NavController) {
      }

    ionViewDidLoad(){
      this.showMap();
      this.loadProgress ='50'; //Input für den Akkustand
    }

    showMap(){
      //Location - lat long
      const location = new google.maps.LatLng(51.545483, 9.905548);


    //Map options
    const options ={
      center: location,
      zoom: 12
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }


}
