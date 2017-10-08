import { Component, OnInit } from '@angular/core';

import { PacienteService } from './../paciente.service'
import { ErrorHandlerService } from './../../core/error-handler.service'

@Component({
  selector: 'app-pacientes-pesquisa',
  templateUrl: './pacientes-pesquisa.component.html',
  styleUrls: ['./pacientes-pesquisa.component.css']
})
export class PacientesPesquisaComponent  {

  constructor(
    private pacienteService: PacienteService,
    private errorHandle: ErrorHandlerService
  ){
    this.findAll()
  }

  situacoes = [
    { label: 'Selecione a situação', value: null },
    { label: 'Ativo', value: 1 },
    { label: 'Inativo', value: 2 }
  ];

  pacientes = [];

  findAll() {
    this.pacienteService.findAll()
    .then(response => this.pacientes = response)
    .catch(err => this.errorHandle.handle(err))
  }
}
