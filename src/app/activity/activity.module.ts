import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import { ActivityRouterModule } from './activity.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityRouterModule
  ],
  declarations: [ActivityComponent]
})
export class ActivityModule { }
