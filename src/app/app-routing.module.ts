import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'main-tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dashboard/:kay/:matchId',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'pool/:kay/:matchId',
    loadChildren: () => import('./poll/pool.module').then(m => m.PoolPageModule)
  },
  {
    path: 'priview/:kay/:matchId',
    loadChildren: () => import('./priview/priview.module').then(m => m.PriviewPageModule)
  },
  {
    path: 'veiw-all-team/:kay/:matchId',
    loadChildren: () => import('./veiw-all-team/veiw-all-team.module').then(m => m.VeiwAllTeamPageModule)
  },
  {
    path: 'veiw-team/:kay/:matchId',
    loadChildren: () => import('./veiw-team/veiw-team.module').then(m => m.VeiwTeamPageModule)
  },
  {
    path: 'main-layout',
    loadChildren: () => import('./main-layout/main-layout.module').then(m => m.MainLayoutPageModule)
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
