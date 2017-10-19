import { FormControl } from '@angular/forms'
import { Component, OnInit } from '@angular/core'

import { UsuarioService  } from './../usuario.service'
import { ToastyService } from 'ng2-toasty'
import { ErrorHandlerService } from './../../core/error-handler.service'

import { usuario } from './../../core/models/usuario'

@Component({
  selector: 'app-usuarios-cadastro',
  templateUrl: './usuarios-cadastro.component.html',
  styleUrls: ['./usuarios-cadastro.component.css']
})
export class UsuariosCadastroComponent {

  usuario = new usuario()
  
  constructor(
    private usuarioService: UsuarioService,
    private toasty: ToastyService,
    private errorHandle: ErrorHandlerService
  ) {}

  salvar(form: FormControl) {
    this.usuarioService.save(this.usuario)
      .then(() => {
          this.toasty.success('Usuário cadastrado com Sucesso')
          form.reset()
      })
      .catch(err => this.errorHandle.handle(err))
  }

}
