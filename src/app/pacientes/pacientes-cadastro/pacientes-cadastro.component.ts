import { FormControl } from '@angular/forms'
import { Component, OnInit } from '@angular/core'

import { PacienteService  } from './../paciente.service'
import { ToastyService } from 'ng2-toasty'
import { ErrorHandlerService } from './../../core/error-handler.service'

import { paciente } from './../../core/models/paciente'


@Component({
  selector: 'app-pacientes-cadastro',
  templateUrl: './pacientes-cadastro.component.html',
  styleUrls: ['./pacientes-cadastro.component.css']
})
export class PacientesCadastroComponent  {

  tiposEndereco = [
    { label: 'Selecione o tipo de Endereço', value:  null},
    { label: 'Rua', value: 1 },
    { label: 'Avenida', value: 2 },
    { label: 'Apartamento', value: 3 }
  ];

  estados = [
    { label: 'Selecione o estado', value: null },
    { label: 'Minas Gerais', value: 1 },
    { label: 'Distrito Federal', value: 2 },
    { label: 'Goias', value: 3 },
    { label: 'São Paulo', value: 4 },
    { label: 'Rio de Janeiro', value: 5 }
  ];

  cidades = [
    { label: 'Selecione a cidade', value: null },
    { label: 'Patos de Minas', value: 1 },
    { label: 'Brasília', value: 2 },
    { label: 'Uberlandia', value: 3 },
  ];

  paciente = new paciente()

  constructor(
    private pacienteService: PacienteService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService
  ) {}

  salvar(form: FormControl) {
    this.pacienteService.save(this.paciente)
    .then(() => this.toasty.info('Paciente Salvo com Sucesso'))
    .catch(err => this.errorHandler.handle(err))
  }
}
