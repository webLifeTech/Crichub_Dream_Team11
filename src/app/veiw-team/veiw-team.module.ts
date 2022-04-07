import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeiwTeamPageRoutingModule } from './veiw-team-routing.module';

import { VeiwTeamPage } from './veiw-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeiwTeamPageRoutingModule
  ],
  declarations: [VeiwTeamPage]
})
export class VeiwTeamPageModule {}
