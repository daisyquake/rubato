import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AboutPage } from '../pages/about/about';
import { MessagesPage } from '../pages/messages/messages';
import { HomePage } from '../pages/home/home';
import { AvailablePeoplePageModule } from '../pages/available-people/available-people.module';
import { TabsPage } from '../pages/tabs/tabs';
import { InterestsPageModule } from '../pages/interests/interests.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiService } from  './shared/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './mat.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { EditInfoPage } from '../pages/edit-info/edit-info';
import { EditInfoPageModule } from '../pages/edit-info/edit-info.module';
import { UserItemPage } from '../pages/user-item/user-item';
import { EmojiProvider } from './shared/emoji';
import { HttpClientModule } from '@angular/common/http';

import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MessagesPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AvailablePeoplePageModule,
    InterestsPageModule,
    SettingsPageModule,
    EditInfoPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MessagesPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions,
    EmojiProvider,
    ImagePicker,
		Crop,
		Camera
  ]
})
export class AppModule {}
