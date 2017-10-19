import { Injectable } from '@angular/core';

import {Headers, Http  } from '@angular/http'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class DoencaService {

  doencasUrl = 'http://localhost:8080/api/v1/doencas'

  constructor(private http: Http) { }

  findAll(): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.doencasUrl}`, { headers })
      .toPromise()
      .then(response => response.json())
  }
}
