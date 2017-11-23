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

  pacientes = []
  dietasPaciente = []
  medicacoesPaciente = []
  displayDietas: boolean = false
  displayMedics: boolean = false
  
  showDialogDietas(paciente) {
      this.findDietasByPaciente(paciente.codigo)
      this.displayDietas = true
  }

  showDialogMedics(paciente) {
    this.findMedicacoesByPaciente(paciente.codigo)
      this.displayMedics = true
  }

  situacoes = [
    { label: 'Selecione a situação', value: null },
    { label: 'Ativo', value: 1 },
    { label: 'Inativo', value: 2 }
  ];

  findAll() {
    this.pacienteService.findAll()
    .then(response => this.pacientes = response)
    .catch(err => this.errorHandle.handle(err))
  }

  findDietasByPaciente(codigo: number) {
    return this.pacienteService.findAllDietasByPaciente(codigo)
      .then(response => this.dietasPaciente = response)
      .catch(err => err)
  }

  findMedicacoesByPaciente(codigo: number) {
    return this.pacienteService.findAllMedicacoesByPaciente(codigo)
      .then(response => this.medicacoesPaciente = response)
      .catch(err => err)
  }
}
