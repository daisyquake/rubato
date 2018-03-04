import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

 myInterests: Array<any> =  [
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
 interests: Array<any> = [
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
    },
    { 
      Id: 4,
      Name: "Chess",
      People: []
    },
    { 
      Id: 5,
      Name: "Table tennis",
      People: []
    },
    { 
      Id: 6,
      Name: "Bicycling",
      People: []
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
