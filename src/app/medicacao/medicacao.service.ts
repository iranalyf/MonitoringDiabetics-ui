import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'

import { medicacao } from './../core/models/medicacao'
import { horarioMedicacao } from './../core/models/horarioMedicacao'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class MedicacaoService {

  medicacaoUrl = 'http://localhost:8080/api/v1/medicacoes'

  horarioMedicacaoUrl = 'http://localhost:8080/api/v1/horario-medicacao'

  pacienteUrl = 'http://localhost:8080/api/v1/pacientes'

  constructor(private http: Http) { }

  findAll(): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.medicacaoUrl}`, { headers })
      .toPromise()
      .then(response => response.json())
  }

  saveMedicacao(medicacao: medicacao): Promise<void> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
    headers.append('Content-Type', 'Application/json')

    return this.http.post(`${this.medicacaoUrl}`, JSON.stringify(medicacao), { headers })
      .toPromise()
      .then(() => null)
  }

  saveHorarioMedicacao(horarioMedicacao: horarioMedicacao): Promise<void> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
    headers.append('Content-Type', 'Application/json')

    return this.http
      .post(`${this.horarioMedicacaoUrl}`, JSON.stringify(horarioMedicacao), { headers })
      .toPromise()
      .then(() => null)
  }

  findAllPacients(): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.pacienteUrl}`, { headers })
      .toPromise()
      .then(response => response.json())
  }

  findAllMedicacoesByIdPaciente(codigo: number): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.pacienteUrl}/${codigo}/allMedicacoes`, { headers })
      .toPromise()
      .then(response => response.json())
  }

}
