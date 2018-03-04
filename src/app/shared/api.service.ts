import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

 myInterests: Array<any> =  [
    { 
      Id: 1,
      Name: 'Tennis',
      Icon: 'tennisball',
      People: []
    },
    { 
      Id: 2,
      Name: "Football",
      Icon: "football",
      People: []
    },
    { 
      Id: 3,
      Name: "Basketball",
      Icon: "basketball",
      People: []
    }
  ];
 interests: Array<any> = [
    { 
      Id: 1,
      Name: "Tennis",
      Icon: "tennisball",
      People: []
    },
    { 
      Id: 2,
      Name: "Football",
      Icon: "football",
      People: []
    },
    { 
      Id: 3,
      Name: "Basketball",
      Icon: "basketball",
      People: []
    },
    { 
      Id: 4,
      Name: "Chess",
      Icon: "chess",
      People: []
    },
    { 
      Id: 5,
      Name: "Table tennis",
      Icon: "tennisball",
      People: []
    },
    { 
      Id: 6,
      Name: "Bicycling",
      Icon: "bicycle",
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
