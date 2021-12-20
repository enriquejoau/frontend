import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeminarioRoutingModule } from './seminario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './presentation/pages/pages.component';
import { ViewsComponent } from './presentation/views/views.component';



@NgModule({
  declarations: [
    PagesComponent,
    ViewsComponent
  ],
  imports: [
    CommonModule,
    SeminarioRoutingModule,
    SharedModule,FormsModule
  ],exports:[PagesComponent]
})
export class SeminarioModule { }
