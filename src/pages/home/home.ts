import { Component, ViewChild, ElementRef } from '@angular/core'; //ViewChild und ElementRef ergänzt
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'; //Import für GPS
declare var google: any; //Keine Errors mit google als variable
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapRef: ElementRef; //Verbindung zum map Element
  map: any;
  loadProgress: number;
  reichweite: number;
  kmStand: number;

  constructor(public navCtrl: NavController, public geo: Geolocation) { //Obejekt für Location
      }

    ionViewDidLoad(){
      this.showMap();
      this.loadProgress = 100; //Input für den Akkustand
      this.reichweite = 345; //Input für reichweite
      this.kmStand = 5655; //Input für kmStand
}

    showMap(){
    this.geo.getCurrentPosition().then( pos => {   //Frag aktuelle Position ab
    this.lat = pos.coords.latitude;
    this.lng = pos.coords.longitude;
    var current_location = new google.maps.LatLng(this.lat, this.lng);  //besetzt Variable current_location mit aktuellen LatLng
    var chargestation1 = new google.maps.LatLng(51.5322716,9.9298304);
    var chargestation2 = new google.maps.LatLng(51.528420,9.937496);
    var chargestation3 = new google.maps.LatLng(51.533100,9.928791);
    //Map options
  /* const options ={
      center: current_location,
      zoom: 12
    } */
//this.map = new google.maps.Map(this.mapRef.nativeElement, options);
var map = new google.maps.Map(document.getElementById('map'), {
  center: current_location,
  zoom: 12
});

//Marker hinzufügen
    let marker1: google.maps.Marker = new google.maps.Marker({  //setzt Marker auf aktuelle Position
      map: map,
      position: current_location,
    })
    let marker2: google.maps.Marker = new google.maps.Marker({
      map: map,
      position: chargestation1
})
  var marker3: google.maps.Marker = new google.maps.Marker({
    position: chargestation2,
    map: map,
    icon: 'ev_station'
  });
let marker4: google.maps.Marker = new google.maps.Marker({
  map: map,
  position: chargestation3
})
  //Informationen hinzufügen
  var infoWindowOptions = {
  content: 'llalala'
  };
  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
  google.maps.event.addListener(marker, 'click', function(e){

    infoWindow.open(map, marker);
  })
  //2. Info Fenster
  var infoWindowOptions2 = {
  content: 'testets'
  };
  var infoWindow2 = new google.maps.InfoWindow(infoWindowOptions2);
  google.maps.event.addListener(marker2, 'click', function(e){

    infoWindow2.open(map, marker2);
  })

    }).catch( err => console.log(err)); //Fehler in Konsolenausgabe auffangen
  }

 }
