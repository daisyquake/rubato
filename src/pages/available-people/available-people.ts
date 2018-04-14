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
  {
    Id: 3,
    FullName: 'Grant Ward',
    ImageUrl: 'assets/imgs/grantWard.png',
    Raiting: 3,
  },
  {
    Id: 4,
    FullName: 'Grant Ward',
    ImageUrl: 'assets/imgs/grantWard.png',
    Raiting: 3,
  },
  {
    Id: 5,
    FullName: 'Grant Ward',
    ImageUrl: 'assets/imgs/grantWard.png',
    Raiting: 3,
  },
  {
    Id: 6,
    FullName: 'Grant Ward',
    ImageUrl: 'assets/imgs/grantWard.png',
    Raiting: 3,
  }
  ,
  {
    Id: 7,
    FullName: 'Grant Ward',
    ImageUrl: 'assets/imgs/grantWard.png',
    Raiting: 3,
  },
  {
    Id: 8,
    FullName: 'Grant Ward',
    ImageUrl: 'assets/imgs/grantWard.png',
    Raiting: 3,
  },
  {
    Id: 9,
    FullName: 'Phil Colson',
    ImageUrl: 'assets/imgs/philColson.png',
    Raiting: 5,
  },
  {
    Id: 10,
    FullName: 'Melinda May',
    ImageUrl: 'assets/imgs/melindaMay.png',
    Raiting: 4,
  }

];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.interest = this.navParams.get('Name');
    console.log('ionViewDidLoad AvailablePeoplePage');
    console.log('Interest name: ' + this.interest);
    this.grid = new Array<Array<object>>();
    this.populateGrid();

  }

  getRandomInt(min: number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  populateGrid (){
    let rowNum = 0; //counter to iterate over the rows in the grid
    let copyPeople  = Object.assign([], this.people); 
  for (; copyPeople.length > 0;) { //iterate people
    let i = 0
    const randomConst = this.getRandomInt(0,3);
    this.grid[rowNum] = Array(3); //declare two elements per row
  //  console.log("people " + (randomConst) + "  " + copyPeople[i])
    if (copyPeople[i]) { //check file URI exists
      this.grid[rowNum][randomConst] = copyPeople[i] //insert user
      copyPeople.splice(i, 1);
      i = i+1;
    }
   // console.log("people " + (randomConst) + "  " + copyPeople[i])
    if (copyPeople[i] && randomConst !== 1) { //repeat for the second user
      this.grid[rowNum][1] = copyPeople[i]
      copyPeople.splice(i, 1);
      i = i+1;
    }
   // console.log("people " + (randomConst) + "  " + copyPeople[i])
    if (copyPeople[i] && randomConst == 1) { //repeat for the second user
      this.grid[rowNum][randomConst + 1] = copyPeople[i]
      copyPeople.splice(i, 1);
      i = i+1;
    }

    rowNum++; //go on to the next row
  }
  }

}
