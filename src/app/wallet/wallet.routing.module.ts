import { WalletComponent } from './wallet.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: WalletComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletRouterModule {}
