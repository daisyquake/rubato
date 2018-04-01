import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProfile } from './userProfile';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  person: UserProfile;
  constructor(public navCtrl: NavController) {
    this.person = new UserProfile();
  }
  openSettings(){
      this.navCtrl.push('settings-page');
  }

  editInfo(){
    this.navCtrl.push('edit-info-page');
  }

  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(2);
    }
    if(event.direction === 4) {
      this.navCtrl.parent.select(0);
    }
  }

}
