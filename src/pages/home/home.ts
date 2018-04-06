import { Component, ViewChild, ElementRef } from '@angular/core'; //ViewChild und ElementRef ergänzt
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

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
  constructor(public navCtrl: NavController,
              public dataService: Data) {}

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
