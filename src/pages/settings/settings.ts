import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationData } from './locationData';
import { KnobItem } from './konbItem';


@IonicPage( 
  { name: 'settings-page'}
)
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  locations: Array<LocationData>;
  location: LocationData;
  distance: number;
  ageRange: KnobItem;
  showMe: boolean;
  newMatches: boolean;
  newMessages: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.distance = 1;
    this.showMe = true;
    this.newMatches = true;
    this.newMessages = true;
    this.ageRange = new KnobItem();
    this.location = new LocationData();
    this.locations = [{ Name: 'Current Location'}, { Name: 'Paris'}, {Name : 'Rome'}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
   
  }

}
