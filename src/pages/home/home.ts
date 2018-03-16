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
    }

    showMap(){
      //Location - lat long
      const location = new google.maps.LatLng(51.507531, -0.127758);


    //Map options
    const options ={
      center: location,
      zoom: 10
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }


}
