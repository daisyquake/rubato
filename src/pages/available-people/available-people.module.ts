import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailablePeoplePage } from './available-people';

@NgModule({
  declarations: [
    AvailablePeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(AvailablePeoplePage),
  ],
})
export class AvailablePeoplePageModule {}
