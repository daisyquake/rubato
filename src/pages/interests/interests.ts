import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../app/shared/shared';


@IonicPage({
  name:'interests-page'
})
@Component({
  selector: 'page-interests',
  templateUrl: 'interests.html',
})
export class InterestsPage {

  interests: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiService) {
  }

  interestTapped(event, item){
    this.api.addMyInterest(item);
    this.navCtrl.pop();
  }

  ionViewWillEnter(){
    this.interests = this.api.getInterests();
  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad InterestsPage');
  }

}
