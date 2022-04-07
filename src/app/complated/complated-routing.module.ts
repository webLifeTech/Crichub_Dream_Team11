import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplatedPage } from './complated.page';

const routes: Routes = [
  {
    path: '',
    component: ComplatedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplatedPageRoutingModule {}
