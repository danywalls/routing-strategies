import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouterModule } from './dashboard.routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouterModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
