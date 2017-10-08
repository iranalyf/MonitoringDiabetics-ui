import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule }  from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { CoreModule } from './core/core.module'
import { DietasModule } from './dietas/dietas.module'
import { MedicacaoModule } from './medicacao/medicacao.module'
import { SegurancaModule } from './seguranca/seguranca.module'
import { PacientesModule } from './pacientes/pacientes.module'
import { UsuariosModule } from './usuarios/usuarios.module'
import { DashModule } from './dash/dash.module'

import { UsuariosPesquisaComponent } from './usuarios/usuarios-pesquisa/usuarios-pesquisa.component'
import { UsuariosCadastroComponent } from './usuarios/usuarios-cadastro/usuarios-cadastro.component'
import { DashboardComponent } from './dash/dashboard/dashboard.component'
import { PacientesPesquisaComponent } from './pacientes/pacientes-pesquisa/pacientes-pesquisa.component'
import { PacientesCadastroComponent } from './pacientes/pacientes-cadastro/pacientes-cadastro.component'
import { DietasCadastroComponent } from './dietas/dietas-cadastro/dietas-cadastro.component'
import { MedicacoesCadastroComponent } from './medicacao/medicacoes-cadastro/medicacoes-cadastro.component'
import { LoginComponent } from './seguranca/login/login.component'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'

const rotas: Routes = [
  { path: 'usuarios', component: UsuariosPesquisaComponent },
  { path: 'usuarios/novo', component: UsuariosCadastroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pacientes', component: PacientesPesquisaComponent },
  { path: 'pacientes/novo', component: PacientesCadastroComponent },
  { path: 'dietas/nova', component: DietasCadastroComponent},
  { path: 'medicacao/nova',component: MedicacoesCadastroComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,

    RouterModule.forRoot(rotas),
   
    CoreModule,
    UsuariosModule,
    PacientesModule,
    SegurancaModule,
    MedicacaoModule,
    DietasModule,
    DashModule

  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
