import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { DashboardComponent } from './dashboard.component';

import { AuthenticationComponent } from './authentication/authentication.component';
import { ProductComponent } from './product/product.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, canActivate:[authGuard],
    children: [
      { path: '', component: StatsComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'product', component: ProductComponent },
    ],
  },
  { path: 'auth', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
