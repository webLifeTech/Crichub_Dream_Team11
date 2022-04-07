import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllTeamPageRoutingModule } from './veiw-all-team-routing.module';

import { ViewAllTeamPage } from './veiw-all-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllTeamPageRoutingModule
  ],
  declarations: [ViewAllTeamPage]
})
export class VeiwAllTeamPageModule { }
