import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})

export class ListComponent {
  
  constructor(public activityService: ActivityService) {};
 
  onChecked(activity): void {
    activity.checked = activity.checked ? false : true;
  }
  
  clickDeleteActivity(activityName) {
    this.activityService.deleteAcitivity(activityName);
  } 
  
}