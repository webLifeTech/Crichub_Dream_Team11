import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplatedPageRoutingModule } from './complated-routing.module';

import { ComplatedPage } from './complated.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplatedPageRoutingModule
  ],
  declarations: [ComplatedPage]
})
export class ComplatedPageModule {}
