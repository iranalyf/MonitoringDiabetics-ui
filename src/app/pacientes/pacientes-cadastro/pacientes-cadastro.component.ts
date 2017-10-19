import { FormControl } from '@angular/forms'
import { Component, OnInit } from '@angular/core'

import { DoencaService } from './../../doencas/doenca.service'
import { PacienteService  } from './../paciente.service'
import { ToastyService } from 'ng2-toasty'
import { ErrorHandlerService } from './../../core/error-handler.service'

import { paciente } from './../../core/models/paciente'


@Component({
  selector: 'app-pacientes-cadastro',
  templateUrl: './pacientes-cadastro.component.html',
  styleUrls: ['./pacientes-cadastro.component.css']
})
export class PacientesCadastroComponent implements OnInit {

  doencas = []
  paciente = new paciente()

  ngOnInit() {
    this.loadDoencas()
  }

  constructor(
    private pacienteService: PacienteService,
    private doencaService: DoencaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService
  ) {}

  salvar(form: FormControl) {
    this.pacienteService.save(this.paciente)
    .then(() => {
      this.toasty.success('Paciente Salvo com Sucesso')
      form.reset()
    })
    .catch(err => this.errorHandler.handle(err))
  }

  loadDoencas() {
    this.doencaService.findAll()
    .then(response => {
      this.doencas = response.map(d => ({label: d.nome, value: d.codigo}))
    })
    .catch(err => this.errorHandler.handle(err))
  }
}
