import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'

import { medicacao } from './../core/models/medicacao'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class MedicacaoService {

  medicacaoUrl = 'http://localhost:8080/api/v1/medicacoes'

  constructor(private http: Http) { }

  findAll(): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.medicacaoUrl}`, { headers })
      .toPromise()
      .then(response => response.json())
  }

  save(medicacao: medicacao): Promise<void> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
    headers.append('Content-Type', 'Application/json')

    return this.http.post(`${this.medicacaoUrl}`, JSON.stringify(medicacao), { headers })
      .toPromise()
      .then(() => null)
  }

}
