import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes-pesquisa',
  templateUrl: './pacientes-pesquisa.component.html',
  styleUrls: ['./pacientes-pesquisa.component.css']
})
export class PacientesPesquisaComponent  {

  situacoes = [
    { label: 'Selecione a situação', value: null },
    { label: 'Ativo', value: 1 },
    { label: 'Inativo', value: 2 }
  ];

  pacientes = [
    {nome: 'Joao', cpf: '081.246.523-12', dataNascimento: '01/01/2000', email: 'joao@gmail.com', situacao: 'ativo'}
  ];
}
