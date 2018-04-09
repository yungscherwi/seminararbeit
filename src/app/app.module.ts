import { NgModule, ErrorHandler } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage'; //Für Speichern
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'; //Versuch Login

//Imports der Seiten
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { MylifePage } from '../pages/mylife/mylife'; //Import für Mylife tab
import { EinstellungenPage } from '../pages/einstellungen/einstellungen';
import { AddItemPage } from '../pages/add-item/add-item';
import { AddWeeklyItemPage } from '../pages/add-weekly-item/add-weekly-item';
import { AddImportantItemPage } from '../pages/add-important-item/add-important-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { WeeklyItemDetailPage } from '../pages/weekly-item-detail/weekly-item-detail';


import { CarPage } from '../pages/car/car'; //Import

import { ImportantItemDetailPage } from '../pages/important-item-detail/important-item-detail';



//Imports für Komponenten und andere Dienste
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { Data } from '../providers/data/data';
import { Geolocation } from '@ionic-native/geolocation'; //Import für Gps
import { AuthService } from '../providers/auth-service/auth-service'; //Versuch Login

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
    AddImportantItemPage,
    ItemDetailPage,
    WeeklyItemDetailPage,
    ImportantItemDetailPage,
    WelcomePage,
    SignupPage,
    LoginPage,
    CarPage
  ],
  imports: [
    BrowserModule, HttpModule,
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
    AddImportantItemPage,
    ItemDetailPage,
    WeeklyItemDetailPage,
    ImportantItemDetailPage,
    WelcomePage,
    SignupPage,
    LoginPage,
    CarPage
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
