import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletRouterModule } from './wallet.routing.module';

@NgModule({
  imports: [
    CommonModule,
    WalletRouterModule
  ],
  declarations: [WalletComponent]
})
export class WalletModule { }
