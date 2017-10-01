import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule }  from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { DietasModule } from './dietas/dietas.module'
import { MedicacaoModule } from './medicacao/medicacao.module'
import { SegurancaModule } from './seguranca/seguranca.module'
import { PacientesModule } from './pacientes/pacientes.module'
import { UsuariosModule } from './usuarios/usuarios.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,

    UsuariosModule,
    PacientesModule,
    SegurancaModule,
    MedicacaoModule,
    DietasModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
