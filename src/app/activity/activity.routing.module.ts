import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivityComponent } from './activity.component';

const routes = [{ path: '', component: ActivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRouterModule {}
