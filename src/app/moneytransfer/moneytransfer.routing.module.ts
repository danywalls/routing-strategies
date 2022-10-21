import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MoneyTransferComponent } from './moneytransfer.component';

const routes = [{ path: '', component: MoneyTransferComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyTransferRouterModule {}
