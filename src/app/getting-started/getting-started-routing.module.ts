import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GettingStartedRootComponent } from './getting-started-root/getting-started-root.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';

const routes: Routes = [
  {
    path: '',
    component: GettingStartedRootComponent,
    children: [
      {
        path: '',
        component: GettingStartedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettingStartedRoutingModule { }
