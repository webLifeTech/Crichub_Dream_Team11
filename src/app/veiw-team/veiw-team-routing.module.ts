import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeiwTeamPage } from './veiw-team.page';

const routes: Routes = [
  {
    path: '',
    component: VeiwTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeiwTeamPageRoutingModule {}
