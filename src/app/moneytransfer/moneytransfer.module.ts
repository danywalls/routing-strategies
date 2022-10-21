import { MoneyTransferRouterModule } from './moneytransfer.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyTransferComponent } from './moneytransfer.component';

@NgModule({
  imports: [
    CommonModule,
    MoneyTransferRouterModule
  ],
  declarations: [MoneyTransferComponent],

})
export class MoneyTransferModule { }
