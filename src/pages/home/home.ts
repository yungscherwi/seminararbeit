import { Component, ViewChild, ElementRef } from '@angular/core'; //ViewChild und ElementRef ergänzt
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { Geolocation } from '@ionic-native/geolocation'; //Import für GPS

declare var google: any;//Keine Errors mit google als variable

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
  image: any;
  items: any;
  weeklyItems: any;
  lat: any;
  lng: any;
  current_location: any;

  constructor(public navCtrl: NavController,
              public dataService: Data,
              public geo : Geolocation) {
          //Damit beim Starten der Anwedungs geladen wird
                //Für heutige Aktivitäten
                this.dataService.getData().then((todos) => {
                  if(todos){
                     this.items = JSON.parse(todos);
                  }

                });


              //Für wöchentliche Aktivität
              this.dataService.getWeeklyData().then((weeklyTodos) => {
                if(weeklyTodos){
                   this.weeklyItems = JSON.parse(weeklyTodos);
                }

              });

              }

    //Damit Ziele jedes mal refresht wird
    ionViewWillEnter(){
                //Für heutige Aktivitäten
                this.dataService.getData().then((todos) => {

                  if(todos){
                     this.items = JSON.parse(todos);
                  }

                });


              //Für wöchentliche Aktivität
              this.dataService.getWeeklyData().then((weeklyTodos) => {

                if(weeklyTodos){
                   this.weeklyItems = JSON.parse(weeklyTodos);
                }

              });
      }

    ionViewDidLoad(){
      this.showMap();
      this.loadProgress = 20; //Input für den Akkustand
      this.reichweite = 545; //Input für reichweite
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

    var map = new google.maps.Map(document.getElementById('map'), {
      center: current_location,
      zoom: 14
    });

    //Marker hinzufügen
        let marker1: google.maps.Marker = new google.maps.Marker({  //setzt Marker auf aktuelle Position
          map: map,
          position: current_location,
        })
    //Marker für Ladesäulen
      this.image = 'assets/imgs/ev_charging.png'
      let marker2: google.maps.Marker = new google.maps.Marker({
          map: map,
          position: chargestation1,
          icon: this.image
    })
      let marker3: google.maps.Marker = new google.maps.Marker({
        position: chargestation2,
        map: map,
        icon: this.image
      });
      let marker4: google.maps.Marker = new google.maps.Marker({
      map: map,
      position: chargestation3,
      icon: this.image
    })
      //Informationen hinzufügen
      var infoWindowOptions = {
      content: 'Ladegeschwindigkeit:  ',
      };
      var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
      google.maps.event.addListener(marker2, 'click', function(e){

        infoWindow.open(map, marker2);
      })
      //2. Info Fenster
      var infoWindowOptions2 = {
      content: 'Ladegeschwindigkeit: '
      };
      var infoWindow2 = new google.maps.InfoWindow(infoWindowOptions2);
      google.maps.event.addListener(marker3, 'click', function(e){

        infoWindow2.open(map, marker3);
      })
      //3. Infofenster
      var infoWindowOptions = {
      content: 'Ladegeschwindigkeit:  ',
      };
      var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
      google.maps.event.addListener(marker4, 'click', function(e){

        infoWindow.open(map, marker4);
      })
        }).catch( err => console.log(err)); //Fehler in Konsolenausgabe auffangen
      }


}
