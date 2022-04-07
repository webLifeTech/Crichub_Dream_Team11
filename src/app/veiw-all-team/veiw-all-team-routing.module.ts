import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllTeamPage } from './veiw-all-team.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllTeamPageRoutingModule { }
