import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'getting-started',
    loadChildren: './getting-started/getting-started.module#GettingStartedModule'
  },
  {
    path: 'frontend',
    loadChildren: './frontend-based/frontend-based.module#FrontendBasedModule'
  },
  {
    path: '',
    redirectTo: 'getting-started',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
