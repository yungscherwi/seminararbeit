import { NgModule, ErrorHandler } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage'; //Für Speichern
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MylifePage } from '../pages/mylife/mylife'; //Import für Mylife tab
import { EinstellungenPage } from '../pages/einstellungen/einstellungen';
import { AddItemPage } from '../pages/add-item/add-item';
import { AddWeeklyItemPage } from '../pages/add-weekly-item/add-weekly-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { WeeklyItemDetailPage } from '../pages/weekly-item-detail/weekly-item-detail';
import { Geolocation } from '@ionic-native/geolocation'; //Import für Gps 


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { Data } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MylifePage,
    EinstellungenPage,
    ProgressBarComponent,
    AddItemPage,
    AddWeeklyItemPage,
    ItemDetailPage,
    WeeklyItemDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MylifePage,
    EinstellungenPage,
    TabsPage,
    AddItemPage,
    AddWeeklyItemPage,
    ItemDetailPage,
    WeeklyItemDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
