import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModuleLoadingStrategyService } from './config/module.loading.stategy';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: 'wallet',
    loadChildren: () =>
      import('./wallet/wallet.module').then((m) => m.WalletModule),
    data: { preload: true },
  },
  {
    path: 'activity',
    loadChildren: () =>
      import('./activity/activity.module').then((m) => m.ActivityModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'money',
    loadChildren: () =>
      import('./moneytransfer/moneytransfer.module').then(
        (m) => m.MoneyTransferModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: ModuleLoadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
