import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

import { JwtHelper } from 'angular2-jwt'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class OauthService {

  oauthTokenUrl = "http://localhost:8080/api/v1/oauth/token"
  jwtPayLoad: any

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper
  ) { this.carregarToken() }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy')

    const body = `username=${usuario}&password=${senha}&grant_type=password`

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
 
        this.armazenarToken(response.json().access_token)
      })
      .catch(response => {
        if(response.status === 400) {
            const responseJson = response.json()

            if(responseJson.error === 'invalid_grant') {
              return Promise.reject('Usuário e/ou senha incorretos!')
            }
        }
        return Promise.reject(response)
      })
  }

  private armazenarToken(token: string) {
    this.jwtPayLoad = this.jwtHelper.decodeToken(token)

    //armazenar o token no localStorage do Navegador
    localStorage.setItem('token', token)
  }

  private carregarToken() {
    const token = localStorage.getItem('token')

    if(token)
      this.armazenarToken(token)
  }

}
