import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes-cadastro',
  templateUrl: './pacientes-cadastro.component.html',
  styleUrls: ['./pacientes-cadastro.component.css']
})
export class PacientesCadastroComponent  {

  tiposEndereco = [
    { label: 'Selecione', value:  null},
    { label: 'Rua', value: 1 },
    { label: 'Avenida', value: 2 },
    { label: 'Apartamento', value: 3 }
  ];

  constructor() {}
}
