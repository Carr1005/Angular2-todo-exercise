import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { HeaderComponent } from './header.component';
import { ListComponent } from './list.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  imports: [CommonModule],
  exports: [ListComponent],
  declarations: [ListComponent, DeleteButtonComponent]
})
export class ListModule {}