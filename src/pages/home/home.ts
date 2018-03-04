import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../app/shared/shared';


@IonicPage(
  {
    name: 'home-page'
  }
  )
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myInterests: Array<any>
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiService) {

  }

  ionViewDidEnter() {
    this.myInterests = this.api.getMyInterests();
  }


  findInterest(){
    this.navCtrl.push('interests-page');
  }
  myInterestTapped(event, item){
      this.navCtrl.push('available-people-page', item);
  }
  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

}
