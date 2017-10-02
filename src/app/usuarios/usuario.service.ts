import { Http, Headers } from '@angular/http'
import { Injectable } from '@angular/core'

import { usuario } from './../core/models/usuario'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class UsuarioService {

  usuariosUrl = 'http://localhost:8080/api/v1/usuarios'

  constructor(private http: Http) { }

  findAll(): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http
      .get(`${this.usuariosUrl}`, { headers })
      .toPromise()
      .then(response => response.json())
  }

  save(usuario: usuario): Promise<void> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
    headers.append('Content-Type', 'Application/json')

    return this.http
      .post(`${this.usuariosUrl}`, JSON.stringify(usuario), { headers })
      .toPromise()
      .then(response => response.json())
  }

  delete(id: number): Promise<usuario> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

     return this.http
      .delete(`${this.usuariosUrl}/${id}`, {headers})
      .toPromise()
      .then(() => null)
  }
}
