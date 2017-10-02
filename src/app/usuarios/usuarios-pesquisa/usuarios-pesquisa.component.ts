import { Component, OnInit, ViewChild } from '@angular/core'
import { UsuarioService  } from './../usuario.service'

import { ToastyService } from 'ng2-toasty'

import { ErrorHandlerService } from './../../core/error-handler.service'

@Component({
  selector: 'app-usuarios-pesquisa',
  templateUrl: './usuarios-pesquisa.component.html',
  styleUrls: ['./usuarios-pesquisa.component.css']
})
export class UsuariosPesquisaComponent implements OnInit{
  
  usuarios = []
  @ViewChild('tabela') grid

  constructor(
    private usuarioService: UsuarioService,
    private toasty: ToastyService,
    private errorHandle: ErrorHandlerService
  ) { }

  ngOnInit() {
     this.pesquisar()
  }

  pesquisar() {
    this.usuarioService
      .findAll()
      .then(response => this.usuarios = response)
      .catch(err => this.errorHandle.handle(err))
  }

  excluir(usuario: any) {
    this.usuarioService.delete(usuario.codigo)
    .then(() => { 
      this.grid.first === 0 ? this.pesquisar() : this.grid.first = 0
      this.toasty.success('Excluído com Sucesso.')})
    .catch(err => this.errorHandle.handle(err))
  }
}
