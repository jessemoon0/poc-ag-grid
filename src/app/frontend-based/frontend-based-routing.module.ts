import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AgFrontendBasedRootComponent } from './ag-frontend-based-root/ag-frontend-based-root.component';
import { AgFrontendBasedComponent } from './ag-frontend-based/ag-frontend-based.component';

const routes: Routes = [
  {
    path: '',
    component: AgFrontendBasedRootComponent,
    children: [
      {
        path: '',
        component: AgFrontendBasedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendBasedRoutingModule { }
