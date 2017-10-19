import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DashboardComponent } from './dashboard/dashboard.component'

import { DashboardService } from './dashboard.service'

import { ChartModule } from  'primeng/components/chart/chart'
import { GrowlModule } from 'primeng/primeng'
import { PanelModule } from 'primeng/primeng'

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,

    ChartModule,
    GrowlModule,
    PanelModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [ DashboardService ]
})
export class DashModule { }
