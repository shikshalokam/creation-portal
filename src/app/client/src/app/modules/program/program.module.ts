import { CoreModule } from '@sunbird/core';
import { SharedModule } from '@sunbird/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramRoutingModule } from './program-routing.module';
import { ListAllProgramsComponent } from './components';

@NgModule({
  declarations: [ListAllProgramsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ProgramRoutingModule
  ]
})
export class ProgramModule { }