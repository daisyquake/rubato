import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterestItemPage } from './interest-item';

@NgModule({
  declarations: [
    InterestItemPage,
  ],
  imports: [
    IonicPageModule.forChild(InterestItemPage),
  ],
})
export class InterestItemPageModule {}
