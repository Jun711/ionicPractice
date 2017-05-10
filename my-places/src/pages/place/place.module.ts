import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Place } from './place';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    Place,
  ],
  imports: [
    IonicPageModule.forChild(Place),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAT5ef9e9-OLWhglM-6U5JxYZu7V4BBN4c'
    })
  ],
  exports: [
    Place
  ]
})
export class PlaceModule {}
