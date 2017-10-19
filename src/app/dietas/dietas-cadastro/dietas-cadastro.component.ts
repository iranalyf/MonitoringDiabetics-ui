import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

import { dieta } from './../../core/models/dieta'

import { ToastyService } from 'ng2-toasty'
import { ErrorHandlerService } from './../../core/error-handler.service'
import { DietaService } from './../dieta.service'
import { PacienteService } from './../../pacientes/paciente.service'

@Component({
  selector: 'app-dietas-cadastro',
  templateUrl: './dietas-cadastro.component.html',
  styleUrls: ['./dietas-cadastro.component.css']
})
export class DietasCadastroComponent implements OnInit{

  constructor(
    private dietaService: DietaService,
    private pacienteService: PacienteService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.loadPacientes()
  }

  pacientes = []
  dieta = new dieta()

  save(form: FormControl) {
      this.dietaService
        .save(this.dieta)
        .then(() => {
          console.log(dieta)
          this.toasty.success('Dieta Cadastrada com Sucesso!')
          form.reset()
        })
        .catch(err => this.errorHandler.handle(err))
  }

  loadPacientes() {
    this.pacienteService.findAll()
      .then(response => {
        this.pacientes = response.map(p => ({label: p.primeiroNome, value: p.codigo}))
      })
      .catch(err => this.errorHandler.handle(err))
  }


}
