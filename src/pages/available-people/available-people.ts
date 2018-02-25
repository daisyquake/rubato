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

  interest: string; 
  grid:  Array<Array<object>>;
  people = [{
    Id: 1,
    FullName: 'Phil Colson',
    ImageUrl: 'assets/imgs/philColson.png',
    Raiting: 5,
  },
  {
    Id: 2,
    FullName: 'Melinda May',
    ImageUrl: 'assets/imgs/melindaMay.png',
    Raiting: 4,
  },
  ,
  {
    Id: 3,
    FullName: 'Grant Ward',
    ImageUrl: 'assets/imgs/grantWard.png',
    Raiting: 3,
  }
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.interest = this.navParams.get('Name');
    console.log('ionViewDidLoad AvailablePeoplePage');
    console.log('Interest name: ' + this.interest);
    this.grid = Array(Math.ceil(this.people.length/2)); //MATHS!
    this.populateGrid();

  }

  populateGrid (){
    let rowNum = 0; //counter to iterate over the rows in the grid

  for (let i = 0; i < this.people.length; i+=2) { //iterate people

    this.grid[rowNum] = Array(2); //declare two elements per row

    if (this.people[i]) { //check file URI exists
      this.grid[rowNum][0] = this.people[i] //insert user
    }

    if (this.people[i+1]) { //repeat for the second user
      this.grid[rowNum][1] = this.people[i+1]
    }

    rowNum++; //go on to the next row
  }
  }

}
