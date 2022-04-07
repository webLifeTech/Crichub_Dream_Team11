import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'upcoming/:sportId',
        loadChildren: () => import('../upcoming/upcoming.module').then(m => m.UpcomingPageModule)
      },
      {
        path: 'live/:sportId',
        loadChildren: () => import('../live/live.module').then(m => m.LivePageModule)
      },
      {
        path: 'complated/:sportId',
        loadChildren: () => import('../complated/complated.module').then(m => m.ComplatedPageModule)
      },
      // {
      //   path: '',
      //   redirectTo: '/tabs/upcoming',
      //   pathMatch: 'full'
      // }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/upcoming',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
