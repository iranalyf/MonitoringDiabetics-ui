import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'

import { dieta } from './../core/models/dieta'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class DietaService {

  dietasUrl = 'http://localhost:8080/api/v1/dietas'

  constructor(private http: Http) { }

  findAll(): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.dietasUrl}`, { headers })
      .toPromise()
      .then(response => response.json())
  
  }

  findOne(id: number): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.dietasUrl}/${id}`, { headers })
      .toPromise()
      .then(response => response.json())
  }

  save(dieta: dieta): Promise<void> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')
    headers.append('Content-Type', 'Application/json')

    return this.http.post(`${this.dietasUrl}`, JSON.stringify(dieta), { headers })
      .toPromise()
      .then(() => null)
  }

}
