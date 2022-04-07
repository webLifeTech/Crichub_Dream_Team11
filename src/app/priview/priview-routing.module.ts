import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriviewPage } from './priview.page';

const routes: Routes = [
  {
    path: '',
    component: PriviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriviewPageRoutingModule {}
