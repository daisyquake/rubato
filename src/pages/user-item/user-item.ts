import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user-item',
  templateUrl: 'user-item.html',
})
export class UserItemPage {

  @Input() userData: any; 
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserItemPage');
  }

}
