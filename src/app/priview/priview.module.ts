import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriviewPageRoutingModule } from './priview-routing.module';

import { PriviewPage } from './priview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriviewPageRoutingModule
  ],
  declarations: [PriviewPage]
})
export class PriviewPageModule {}
