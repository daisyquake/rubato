import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailablePeoplePage } from './available-people';
import { UserItemPage } from '../user-item/user-item';

@NgModule({
  declarations: [
    AvailablePeoplePage,
    UserItemPage
  ],
  imports: [
    IonicPageModule.forChild(AvailablePeoplePage),
  ],
  exports: [
    UserItemPage
  ]
})
export class AvailablePeoplePageModule {}
