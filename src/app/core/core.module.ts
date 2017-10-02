import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JwtHelper } from 'angular2-jwt'

import { ToastyModule } from 'ng2-toasty'

import { ErrorHandlerService } from './error-handler.service'
import { OauthService } from './../seguranca/auth.service'

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
  ],
  declarations: [],
  exports: [ToastyModule],
  providers: [
    ErrorHandlerService,
    OauthService,
    JwtHelper
  ]
})
export class CoreModule { }
