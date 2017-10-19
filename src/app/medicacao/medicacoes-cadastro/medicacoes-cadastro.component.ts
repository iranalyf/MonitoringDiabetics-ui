import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

import { medicacao } from './../../core/models/medicacao'

import { PacienteService } from './../../pacientes/paciente.service'
import { MedicacaoService } from './../medicacao.service'
import { ToastyService } from 'ng2-toasty'
import { ErrorHandlerService } from './../../core/error-handler.service'

@Component({
  selector: 'app-medicacoes-cadastro',
  templateUrl: './medicacoes-cadastro.component.html',
  styleUrls: ['./medicacoes-cadastro.component.css']
})
export class MedicacoesCadastroComponent implements OnInit{

  constructor(
    private medicacaoService: MedicacaoService,
    private pacienteService: PacienteService,
    private errorHandle: ErrorHandlerService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.loadPacientes()
  }

  medicacao = new medicacao()
  pacientes = []

  saveMedicacao(form: FormControl) {
    this.medicacaoService.saveMedicacao(this.medicacao)
      .then(() => {
        this.toasty.success('Medicação Adicionada com Sucesso para o Paciente!')
        form.reset()
      })
      .catch(err => this.errorHandle.handle(err))
  }

  loadPacientes() {
    this.pacienteService.findAll()
      .then(response => {
        this.pacientes = response.map(p => ({label: p.primeiroNome, value: p.codigo}) )
      })
    .catch(err => this.errorHandle.handle(err))
  }
}
