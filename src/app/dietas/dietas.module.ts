import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DietasCadastroComponent } from './dietas-cadastro/dietas-cadastro.component'

import { DietaService } from './dieta.service'

import { InputTextModule } from 'primeng/components/inputtext/inputtext'
import { CalendarModule } from 'primeng/components/calendar/calendar'
import { ButtonModule } from 'primeng/components/button/button'
import { DropdownModule } from 'primeng/components/dropdown/dropdown'
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea'
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,

    InputTextModule,
    CalendarModule,
    ButtonModule,
    InputTextareaModule,
    DropdownModule,
    SelectButtonModule
  ],
  exports: [DietasCadastroComponent],
  declarations: [DietasCadastroComponent, DietasCadastroComponent],
  providers: [DietaService]
})
export class DietasModule { }
