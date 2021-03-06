import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
//import { DashboardModule } from './dashboard/dashboard.module';
//import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: '' , redirectTo : 'login', pathMatch : 'full'  },
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
