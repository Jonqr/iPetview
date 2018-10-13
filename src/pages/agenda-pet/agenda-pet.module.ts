import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaPetPage } from './agenda-pet';

@NgModule({
  declarations: [
    AgendaPetPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaPetPage),
  ],
})
export class AgendaPetPageModule {}
