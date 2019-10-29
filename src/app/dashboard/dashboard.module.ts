import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HotelListComponent } from '../dashboard/hotel-list/hotel-list.component';

@NgModule({
  declarations: [
    HotelListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
