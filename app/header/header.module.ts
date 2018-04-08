import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { InputComponent } from './input-field/input-field.component';
import { AddButtonComponent } from './add-button/add-button.component';

@NgModule({
  imports: [FormsModule],
  exports: [HeaderComponent],
  declarations: [
    HeaderComponent, 
    InputComponent, 
    AddButtonComponent
  ]
})
export class HeaderModule {}