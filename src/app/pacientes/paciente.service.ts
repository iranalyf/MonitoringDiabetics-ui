import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'

import { paciente } from './../core/models/paciente'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class PacienteService {

  pacientesUrl = "http://localhost:8080/api/v1/pacientes"

  constructor(
    private http: Http) { }

  save(paciente: paciente): Promise<void> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
    headers.append('Content-Type', 'Application/json')

    return this.http.post(`${this.pacientesUrl}`, JSON.stringify(paciente), { headers })
      .toPromise()
      .then(response => response.json())
  }

  excluir(codigo: number): Promise<paciente> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.delete(`${this.pacientesUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null)
  }

  findAll(): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.pacientesUrl}`, { headers })
      .toPromise()
      .then(response => response.json())
  }

  findAllDietasByPaciente(codigo: number): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.pacientesUrl}/${codigo}/dietas`, { headers })
      .toPromise()
      .then(response => response.json())
  }

  findAllMedicacoesByPaciente(codigo: number): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.pacientesUrl}/${codigo}/medicacoes`, { headers })
      .toPromise()
      .then(response => response.json())
  }

}
