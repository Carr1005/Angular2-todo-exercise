import { Component, ViewChild } from '@angular/core';
import { InputComponent } from './input-field/input-field.component';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
})

export class HeaderComponent  {
  
  constructor(private activityService: ActivityService) {};
  @ViewChild(InputComponent) inputFiled:InputComponent;
  

  clickAddActivity() {
    let newActivity = {
      name: this.inputFiled.newActivity,
      checked: false
    }
    this.activityService.addAcitivity(newActivity);
    this.inputFiled.newActivity = null;
  } 
}
