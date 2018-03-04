import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AvailablePeoplePageModule } from '../pages/available-people/available-people.module';
import { TabsPage } from '../pages/tabs/tabs';
import { InterestsPageModule } from '../pages/interests/interests.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiService } from  './shared/shared';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    AvailablePeoplePageModule,
    InterestsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions
  ]
})
export class AppModule {}
