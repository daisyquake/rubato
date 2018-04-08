import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

 myInterests: Array<any> =  [
    { 
      Id: 1,
      Name: 'Tennis',
      Icon: 'tennisball',
      People: [],
      Total: 100,
      CurrentlyOnline: 50
    },
    { 
      Id: 2,
      Name: "Football",
      Icon: "football",
      People: [],
      Total: 100,
      CurrentlyOnline: 50
    },
    { 
      Id: 3,
      Name: "Basketball",
      Icon: "basketball",
      People: [],
      Total: 100,
      CurrentlyOnline: 50
    }
  ];
 interests: Array<any> = [
    { 
      Id: 1,
      Name: "Tennis",
      Icon: "tennisball",
      People: [],
      Total: 100,
      CurrentlyOnline: 50
    },
    { 
      Id: 2,
      Name: "Football",
      Icon: "football",
      People: [],
      Total: 1000,
      CurrentlyOnline: 150
    },
    { 
      Id: 3,
      Name: "Basketball",
      Icon: "basketball",
      People: [],
      Total: 100,
      CurrentlyOnline: 50
    },
    { 
      Id: 4,
      Name: "Chess",
      Icon: "bulb",
      People: [],
      Total: 10,
      CurrentlyOnline: 5
    },
    { 
      Id: 5,
      Name: "Table tennis",
      Icon: "tennisball",
      People: [],
      Total: 150,
      CurrentlyOnline: 50
    },
    { 
      Id: 6,
      Name: "Bicycling",
      Icon: "bicycle",
      People: [],
      Total: 1000,
      CurrentlyOnline: 10
    }
  ];

  addMyInterest(item: any): any {
    this.myInterests.push(item)
  }
    getMyInterests(){
        return this.myInterests;
    }

     getInterests(){
       return this.interests.filter(element =>  this.myInterests.find(x => x.Id === element.Id) === undefined)
            
    };
 
}
