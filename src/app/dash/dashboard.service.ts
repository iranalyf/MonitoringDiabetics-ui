import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class DashboardService {

  dashboardUrl = 'http://localhost:8080/api/v1/dashboard'

  constructor(private http: Http) { }

  findAllUsers(): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.dashboardUrl}/allUsers`, { headers })
      .toPromise()
      .then(response => response.json())
  }

  findAllPacientes(): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.dashboardUrl}/allPacientes`, { headers })
      .toPromise()
      .then(response => response.json())
  }

  findAllPacientesActives(): Promise<any> {
    const headers = new Headers()
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu')

    return this.http.get(`${this.dashboardUrl}/allPacientesActives`, { headers })
      .toPromise()
      .then(response => response.json())
  }
}
