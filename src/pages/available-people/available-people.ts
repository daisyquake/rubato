import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage(
 { name: 'available-people-page'}
)
@Component({
  selector: 'page-available-people',
  templateUrl: 'available-people.html',
})
export class AvailablePeoplePage {

  interest: string 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.interest = this.navParams.get('Name');
    console.log('ionViewDidLoad AvailablePeoplePage');
    console.log('Interest name: ' + this.interest);
  }

}
