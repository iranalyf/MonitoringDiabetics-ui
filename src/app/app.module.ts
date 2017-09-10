import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { PasswordModule } from 'primeng/components/password/password';
import { InputSwitchModule } from 'primeng/components/inputswitch/inputswitch';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { ButtonModule } from 'primeng/components/button/button';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';

import { AppComponent } from './app.component';
import { UsuariosCadastroComponent } from './usuarios/usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosPesquisaComponent } from './usuarios/usuarios-pesquisa/usuarios-pesquisa.component';
import { PacientesPesquisaComponent } from './pacientes/pacientes-pesquisa/pacientes-pesquisa.component';
import { PacientesCadastroComponent } from './pacientes/pacientes-cadastro/pacientes-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosCadastroComponent,
    UsuariosPesquisaComponent,
    PacientesPesquisaComponent,
    PacientesCadastroComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    InputTextModule,
    CalendarModule,
    FileUploadModule,
    CheckboxModule,
    PasswordModule,
    InputSwitchModule,
    InputMaskModule,
    ButtonModule,
    TabViewModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
