import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';



@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListingComponent
  ]
})
export class SharedModule { }
