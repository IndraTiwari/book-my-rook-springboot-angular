import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { } from './dashboard/dashboard.module';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
