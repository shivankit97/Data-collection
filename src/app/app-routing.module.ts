import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAccountComponent} from './new-account/new-account.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPublisherComponent} from './add-publisher/add-publisher.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup/:id',
    component: NewAccountComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'add-publisher',
    component: AddPublisherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
