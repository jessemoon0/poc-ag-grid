import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgGridModule } from 'ag-grid-angular';
import { LicenseManager } from 'ag-grid-enterprise/main';
import 'ag-grid-enterprise';
import { GettingStartedRoutingModule } from '../getting-started/getting-started-routing.module';

// AgileThought_MultiApp_2Devs8_May_2018__MTUyNTc1MjAwMDAwMA==3f655b6a17cc3305760f12ae3f1bba02
LicenseManager.setLicenseKey(
  'PricewaterhouseCoopers_Global_Licensing_Services_Corporation_MultiApp_2Devs13_February_2019__MTU1MDAxNjAwMDAwMA==1108f44c962369b62b446aa1a70598ba'
);

@NgModule({
  declarations: [],
  imports: [
    AgGridModule.withComponents([])
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    AgGridModule
  ]
})
export class SharedModule { }
