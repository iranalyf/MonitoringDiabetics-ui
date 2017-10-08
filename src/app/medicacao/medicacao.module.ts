import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MedicacoesCadastroComponent } from './medicacoes-cadastro/medicacoes-cadastro.component';

import { MedicacaoService } from './medicacao.service'

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { ButtonModule } from 'primeng/components/button/button';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';

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
    DropdownModule
  ],
  exports: [MedicacoesCadastroComponent],
  declarations: [MedicacoesCadastroComponent],
  providers:[MedicacaoService]
})
export class MedicacaoModule { }
