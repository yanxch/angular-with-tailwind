import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularStateManagementComponent } from './static/angular-state-management';
import { ReusableContainersComponent } from './static/reusable-containers';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'angular-state-management',
    component: AngularStateManagementComponent
  },
  {
    path: 'reusable-containers',
    component: ReusableContainersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
