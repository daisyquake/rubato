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
  private readonly gridWidth = 3;
  grid = Array<object>(this.gridWidth);


  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiService) {
  }

  interestTapped(event, item){
    this.api.addMyInterest(item);
    this.navCtrl.pop();
  }

  ionViewWillEnter(){
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestsPage');
    this.interests = this.api.getInterests();
    this.populateGrid();
  }

  populateGrid (){
  let rowIndex = 0; 
  
  for ( let i = 0; i < this.interests.length; i+= this.gridWidth) { 
    this.grid[rowIndex] = Array(this.gridWidth); 

    for(let columnIndex = 0; columnIndex< this.gridWidth; columnIndex+=1){
      if(this.interests[i+columnIndex]){
        this.grid[rowIndex][i+columnIndex] = this.interests[i+columnIndex]
      }
    }
    rowIndex++; 
  }
  }

}
