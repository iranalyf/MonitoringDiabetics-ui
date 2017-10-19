import { Component, OnInit } from '@angular/core';

import {Message} from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty'

import { DashboardService } from './../dashboard.service'
import { ErrorHandlerService } from './../../core/error-handler.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

    ngOnInit() {
        this.toasty.wait('loading..........')
        this.findAllPacientes()
        this.findAllPacientesActives()
        this.findAllUsers()
    }

    data: any
    msgs: Message[]
    pacientes: number = 0
    pacientesActives: number = 0
    totalAllUsers: number = 0

    constructor(private toasty: ToastyService, 
                private dashboardService: DashboardService,
                private errorHandler: ErrorHandlerService) {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
    }

    selectData(event) {
        this.msgs = []
        this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]})
    }

    findAllUsers() {
        return this.dashboardService.findAllUsers()
            .then(response => {
                this.totalAllUsers = response
            })
            .catch(err => this.errorHandler.handle(err))
    }

    findAllPacientes() {
        return this.dashboardService.findAllPacientes()
            .then(response => {
                this.pacientes = response
            })
            .catch(err => this.errorHandler.handle(err))
    }

    findAllPacientesActives() {
        return this.dashboardService.findAllPacientesActives()
            .then(response => {
                this.pacientesActives = response
            })
            .catch(err => this.errorHandler.handle(err))
    }
}
