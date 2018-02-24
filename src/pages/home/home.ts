import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController) {

  }

  interestTapped(event, item){

  }
  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

}
