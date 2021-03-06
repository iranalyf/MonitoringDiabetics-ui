import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'

import { UsuariosPesquisaComponent } from './usuarios-pesquisa/usuarios-pesquisa.component'
import { UsuariosCadastroComponent  } from './usuarios-cadastro/usuarios-cadastro.component'
import { UsuarioService } from './usuario.service'

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
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,

    InputTextModule,
    CalendarModule,
    FileUploadModule,
    CheckboxModule,
    PasswordModule,
    InputSwitchModule,
    InputMaskModule,
    ButtonModule,
    TabViewModule,
    DropdownModule,
    TooltipModule,
    DataTableModule
  ],
  providers: [UsuarioService],
  declarations: [
    UsuariosCadastroComponent,
    UsuariosPesquisaComponent
  ],
  exports: [UsuariosCadastroComponent, UsuariosPesquisaComponent]
})
export class UsuariosModule { }
