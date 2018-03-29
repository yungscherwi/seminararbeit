import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MylifePage } from './mylife';

@NgModule({
  declarations: [
    MylifePage,
  ],
  imports: [
    IonicPageModule.forChild(MylifePage),
  ],
})
export class MylifePageModule {}
