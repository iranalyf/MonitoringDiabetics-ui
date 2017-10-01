import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class UsuarioService {

  usuariosUrl = 'http://localhost:8080/api/v1/usuarios'

  constructor(private http: Http) { }

  findAll(): Promise<any> {
    return this.http.get(this.usuariosUrl)
      .toPromise()
      .then(response => console.log(response.json()))
  }
}
