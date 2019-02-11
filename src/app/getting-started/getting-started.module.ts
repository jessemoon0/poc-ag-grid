import { NgModule } from '@angular/core';
import { GettingStartedRootComponent } from './getting-started-root/getting-started-root.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [GettingStartedRootComponent, GettingStartedComponent],
  imports: [
    SharedModule,
    GettingStartedRoutingModule
  ]
})
export class GettingStartedModule { }
