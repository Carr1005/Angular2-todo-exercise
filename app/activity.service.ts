import { Injectable } from '@angular/core';

@Injectable()
export class ActivityService {

  constructor() {}
    
  activitiesPool = [
      {
        name: "Hit the gym",
        checked: true
      },
      {
        name: "Pay bills",
        checked: false
      },
      {
        name: "Meet George",
        checked: false
      },
      {
        name: "Buy eggs",
        checked: false
      },
      {
        name: "Read a book",
        checked: false
      },
      {
        name: "Organize office",
        checked: false
      }
  ];

  addAcitivity(activity: {name:string, checked:boolean}) {
    this.activitiesPool.push(activity);
  }

  deleteAcitivity(dactivity: {name:string, checked:boolean}) {
    this.activitiesPool = this.activitiesPool.filter(activity => {
       return (activity.name !== dactivity.name);
    });
  }

  getActivities(){
    return this.activitiesPool;
  }

}