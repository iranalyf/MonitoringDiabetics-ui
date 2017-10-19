import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

import { horarioMedicacao } from './../../core/models/horarioMedicacao'

import { MedicacaoService } from './../medicacao.service'
import { ErrorHandlerService } from './../../core/error-handler.service'
import { ToastyService } from 'ng2-toasty'

@Component({
  selector: 'app-medicacao-horario',
  templateUrl: './medicacao-horario.component.html',
  styleUrls: ['./medicacao-horario.component.css']
})
export class MedicacaoHorarioComponent implements OnInit {

  constructor(
    private medicacaoService: MedicacaoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.findAllPacientes()
    this.findAllMedicacoesByIdPaciente(1)
  }

  horarioMedicacao = new horarioMedicacao()
  pacientes = []
  medicacoes = []

  save(form: FormControl) {
    console.log(this.horarioMedicacao)
    // return this.medicacaoService.saveHorarioMedicacao(this.horarioMedicacao)
    //   .then(() => {
    //     this.toasty.success('Horario de Medicação Definido com Sucesso!')
    //   })
    //   .catch(err => this.errorHandler.handle(err))
  }

  findAllPacientes() {
    return this.medicacaoService.findAllPacients()
      .then(response => {
        this.pacientes = response.map( p => ({ label: p.primeiroNome, value: p.codigo }))
      })
      .catch(err => this.errorHandler.handle(err))
  }

  findAllMedicacoesByIdPaciente(codigo: number) {
    return this.medicacaoService.findAllMedicacoesByIdPaciente(codigo)
      .then(response => {
          this.medicacoes = response.map( m => ({ label: m.descricao, value: m.codigo }))
      })
      .catch(err => this.errorHandler.handle(err))
  }

}
