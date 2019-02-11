import { NgModule } from '@angular/core';
import { AgFrontendBasedRootComponent } from './ag-frontend-based-root/ag-frontend-based-root.component';
import { AgFrontendBasedComponent } from './ag-frontend-based/ag-frontend-based.component';
import { FrontendBasedRoutingModule } from './frontend-based-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AgFrontendBasedRootComponent,
    AgFrontendBasedComponent
  ],
  imports: [
    SharedModule,
    FrontendBasedRoutingModule
  ]
})
export class FrontendBasedModule { }
