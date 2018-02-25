import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  interests = [
    { 
      Id: 1,
      Name: "Tennis",
      People: []
    },
    { 
      Id: 2,
      Name: "Football",
      People: []
    },
    { 
      Id: 3,
      Name: "Basketball",
      People: []
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  interestTapped(event, item){
      this.navCtrl.push('available-people-page', item);
  }
  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

}
