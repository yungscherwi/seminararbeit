import { Component, ViewChild, ElementRef } from '@angular/core'; //ViewChild und ElementRef ergänzt
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { Geolocation } from '@ionic-native/geolocation'; //Import für GPS
import { AlertController } from 'ionic-angular'; //Import für Alert
import { ModalController } from 'ionic-angular';
import { NavigateMePage } from '../navigate-me/navigate-me';
import {} from '@types/googlemaps';//Keine Errors mit google als variable

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
  public mondayItems = [];
  public importantItems = [];
  public weeklyItems = [];
  imageCharging: any;
  imageHome: any;
  imageWorkplace: any;
  lat: any;
  lng: any;
  current_location: any;

  constructor(public navCtrl: NavController,
              public dataService: Data,
              public geo : Geolocation,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController) {
          //Damit beim Starten der Anwedungs geladen wird
                //Für heutige Aktivitäten
                this.dataService.getData().then((todos) => {
                  if(todos){
                     this.items = JSON.parse(todos);
                  }

                });

              //Für wöchentliche Aktivität
              this.dataService.getWeeklyDataMonday().then((mondayTodos) => {
                if(mondayTodos){
                   this.mondayItems = mondayTodos;
                }

              });

              //Für wichtige Adressen
              this.dataService.getImportantData().then((importantAdresses) => {
                if(importantAdresses){
                   this.importantItems = JSON.parse(importantAdresses);
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
      this.loadProgress = 9; //Input für den Akkustand
      this.reichweite = 50; //Input für reichweite
    }

//Notification wenn niedriger Ladestand
    batteryEmpty(){
      let alert = this.alertCtrl.create({
        title: 'Dein Akku ist bald leer!',
        subTitle: 'Hier sind einige Dinge die du währenddessen erledigen könntest: <br><br> - Supermarkt<br>- Autowerkstatt ',
        buttons: ['OK']
      });
      alert.present();
    }


    showMap(){
        this.geo.getCurrentPosition().then( pos => {   //Frag aktuelle Position ab
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
        var current_location = new google.maps.LatLng(this.lat, this.lng);  //besetzt Variable current_location mit aktuellen LatLng
        var chargestation1 = new google.maps.LatLng(51.5322716,9.9298304);
        var chargestation2 = new google.maps.LatLng(51.528420,9.937496);
        var chargestation3 = new google.maps.LatLng(51.536642,9.928020);
        var chargestation4 = new google.maps.LatLng(51.539923,9.933797);
        var chargestation5 = new google.maps.LatLng(51.529717,9.939565);
        var chargestation6 = new google.maps.LatLng(51.531099,9.938224);

        var workplace = new google.maps.LatLng(51.536484,9.934175);
        var home = new google.maps.LatLng(51.527943,9.942784); //Geismar Landstraße 14

    var map = new google.maps.Map(document.getElementById('map'), {
      center: current_location,
      zoom: 14
    });
//****************** Marker ****************
//Bilder
this.imageCharging = 'assets/imgs/ev_charging.png'
this.imageWorkplace = 'assets/imgs/workplace.png'
this.imageHome = 'assets/imgs/home.png'


    //Marker für User
        let markerUser: google.maps.Marker = new google.maps.Marker({  //setzt Marker auf aktuelle Position
          map: map,
          position: current_location,
        })
    //Marker für Ladesäulen
      let markerChargestation1: google.maps.Marker = new google.maps.Marker({
          map: map,
          position: chargestation1,
          icon: this.imageCharging
    })
      let markerChargestation2: google.maps.Marker = new google.maps.Marker({
        position: chargestation2,
        map: map,
        icon: this.imageCharging
      });

      let markerChargestation3: google.maps.Marker = new google.maps.Marker({
      map: map,
      position: chargestation3,
      icon: this.imageCharging
    })

    let markerChargestation4: google.maps.Marker = new google.maps.Marker({
    map: map,
    position: chargestation4,
    icon: this.imageCharging
  })

    let markerChargestation5: google.maps.Marker = new google.maps.Marker({
    map: map,
    position: chargestation5,
    icon: this.imageCharging
  })

    let markerChargestation6: google.maps.Marker = new google.maps.Marker({
    map: map,
    position: chargestation6,
    icon: this.imageCharging
    })

    //Marker für Arbeitsplatz
    let markerWorkplace: google.maps.Marker = new google.maps.Marker({
    map: map,
    position: workplace,
    icon: this.imageWorkplace
  })

    //Marker für Zuhause
    let markerHome: google.maps.Marker = new google.maps.Marker({
    map: map,
    position: home,
    icon: this.imageHome
  })


//****************** InfoWindows ****************

      //Infofenster eigener Standort
      var infoWindowOptionsUser = {
      content: 'Dein aktueller Standort',
      };
      var infoWindowUser = new google.maps.InfoWindow(infoWindowOptionsUser);
      google.maps.event.addListener(markerUser, 'click', function(e){
        infoWindowUser.open(map, markerUser);
      })

//****** Ladesäulen Infofenster ***********
      //Infofenster 1. Ladestation
      var infoWindowOptionsChargestation1 = {
      content: '<p><b>Name: </b>Parkhaus Groner Tor</p>'
              +'<p><b>Adresse: </b>Walkemühlenweg 8, 37083 Göttingen</p>'
              +'<p><b>Ladegeschwindigkeit: </b>22 kW</p>'
              +'<p><b>Aktuelle Verfügbarkeit: </b> frei</p>',
      };
      var infoWindowChargestation1 = new google.maps.InfoWindow(infoWindowOptionsChargestation1);
      google.maps.event.addListener(markerChargestation1, 'click', function(e){
        infoWindowChargestation1.open(map, markerChargestation1);
      })

      //Infofenster 2. Ladestation
      var infoWindowOptionsChargestation2 = {
      content: '<p><b>Name: </b>Landkreis</p>'
              +'<p><b>Adresse: </b>Groner-Tor-Straße 31, 37073 Göttingen</p>'
              +'<p><b>Ladegeschwindigkeit: </b>22 kW</p>'
              +'<p><b>Aktuelle Verfügbarkeit: </b> frei</p>',
      };
      var infoWindowChargestation2 = new google.maps.InfoWindow(infoWindowOptionsChargestation2);
      google.maps.event.addListener(markerChargestation2, 'click', function(e){
        infoWindowChargestation2.open(map, markerChargestation2);
      })

      //Infofenster 3. Ladestation
      var infoWindowOptionsChargestation3 = {
      content: '<p><b>Name: </b>Bahnhof in Göttingen</p>'
              +'<p><b>Adresse: </b>Bahnhofsplatz 1, 37073 Göttingen</p>'
              +'<p><b>Ladegeschwindigkeit: </b>43 kW und mehr</p>'
              +'<p><b>Aktuelle Verfügbarkeit: </b> besetzt</p>',
      };
      var infoWindowChargestation3 = new google.maps.InfoWindow(infoWindowOptionsChargestation3);
      google.maps.event.addListener(markerChargestation3, 'click', function(e){
        infoWindowChargestation3.open(map, markerChargestation3);
      })

      //Infofenster 4. Ladestation
      var infoWindowOptionsChargestation4 = {
      content: '<p><b>Name: </b>Universität in Göttingen</p>'
              +'<p><b>Adresse: </b>Weender Landstraße 14, 37073 Göttingen</p>'
              +'<p><b>Ladegeschwindigkeit: </b>22 kW</p>'
              +'<p><b>Aktuelle Verfügbarkeit: </b> frei</p>',
      };
      var infoWindowChargestation4 = new google.maps.InfoWindow(infoWindowOptionsChargestation4);
      google.maps.event.addListener(markerChargestation4, 'click', function(e){
        infoWindowChargestation4.open(map, markerChargestation4);
      })

      //Infofenster 5. Ladestation
      var infoWindowOptionsChargestation5 = {
      content: '<p><b>Name: </b>Schnelllader am Geismartor in Göttingen</p>'
              +'<p><b>Adresse: </b>Am Geismartor 4, 37083 Göttingen</p>'
              +'<p><b>Ladegeschwindigkeit: </b>43 kW und mehr</p>'
              +'<p><b>Aktuelle Verfügbarkeit: </b> frei</p>',
      };
      var infoWindowChargestation5 = new google.maps.InfoWindow(infoWindowOptionsChargestation5);
      google.maps.event.addListener(markerChargestation5, 'click', function(e){
        infoWindowChargestation5.open(map, markerChargestation5);
      })

      //Infofenster 5. Ladestation
      var infoWindowOptionsChargestation6 = {
      content: '<p><b>Name: </b>Kaufland in Göttingen</p>'
              +'<p><b>Adresse: </b>Kurze-Geismar-Straße 26-30, 37083 Göttingen</p>'
              +'<p><b>Ladegeschwindigkeit: </b>43 kW und mehr</p>'
              +'<p><b>Aktuelle Verfügbarkeit: </b> besetzt</p>',
      };
      var infoWindowChargestation6 = new google.maps.InfoWindow(infoWindowOptionsChargestation6);
      google.maps.event.addListener(markerChargestation6, 'click', function(e){
        infoWindowChargestation6.open(map, markerChargestation6);
      })

//******Wichtige Adressen Infofenster ***********

      //Infofenster Zuhause
      var infoWindowOptionsHome = {
      content: '<p><b>Name: </b>Dein Zuhause</p>'
              +'<p><b>Adresse: </b>Geismar Landstraße 14</p>'
      };
      var infoWindowHome = new google.maps.InfoWindow(infoWindowOptionsHome);
      google.maps.event.addListener(markerHome, 'click', function(e){
        infoWindowHome.open(map, markerHome);
      })

      //Arbeitsplatz
      var infoWindowOptionsWorkplace = {
      content: '<p><b>Name: </b>Dein Arbeitsplatz</p>'
              +'<p><b>Adresse: </b>Weender Straße 75</p>'
      };
      var infoWindowWorkplace = new google.maps.InfoWindow(infoWindowOptionsWorkplace);
      google.maps.event.addListener(markerWorkplace, 'click', function(e){
        infoWindowWorkplace.open(map, markerWorkplace);
      })

        }).catch( err => console.log(err)); //Fehler in Konsolenausgabe auffangen
      }

// Fahrt Starten
navMe(){

        let addModal = this.modalCtrl.create(NavigateMePage);

    /*    addModal.onDidDismiss((weeklyItem) => {

    });*/

        addModal.present();

        }

}
