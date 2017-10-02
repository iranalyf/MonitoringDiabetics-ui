import { Component, OnInit } from '@angular/core';
import { OauthService } from './../auth.service'

import { ErrorHandlerService } from './../../core/error-handler.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: OauthService,
    private errorHandle: ErrorHandlerService
  ) {}

  login(usuario: string, senha: string) {
    this.authService.login(usuario, senha)
      .then(() => {
        //TODO: implementar redirecionamento
      })
      .catch(err => this.errorHandle.handle(err))
  }

}
