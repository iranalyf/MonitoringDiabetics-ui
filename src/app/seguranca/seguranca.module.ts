import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { PasswordModule } from 'primeng/components/password/password';
import { ButtonModule } from 'primeng/components/button/button';


@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class SegurancaModule { }
