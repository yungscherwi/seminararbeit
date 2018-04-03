import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthServiceProvider } from '../providers/auth-service/auth-service'; //Auth Server importieren
import { HttpModule } from '@angular/http'

//import { AboutPage } from '../pages/about/about';
import { WelcomePage } from '../pages/welcome/welcome'; //Import Willkommensseite
import { LoginPage } from '../pages/login/login'; //Import Login Seite
import { SignupPage } from '../pages/signup/signup'; //Import Signup Seite
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MylifePage } from '../pages/mylife/mylife'; //Import für Mylife tab
import { EinstellungenPage } from '../pages/einstellungen/einstellungen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar'; //Importiert Progress-Bar, zudem auch unter declarations einfügen


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    TabsPage,
    MylifePage,
    EinstellungenPage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule, HttpModule, //Http Modul importiert für api AuthServer
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    MylifePage,
    EinstellungenPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
