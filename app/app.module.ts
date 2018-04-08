import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from './header/header.module';
import { ListModule } from './list/list.module';

import { AppComponent } from './app.component';
import { ActivityService } from './activity.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HeaderModule, ListModule],
  providers: [ActivityService],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
