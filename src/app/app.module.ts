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

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'

const rotas: Routes = [
  { path: 'usuarios', component: UsuariosPesquisaComponent },
  { path: 'usuarios/novo', component: UsuariosCadastroComponent },
  { path: 'dashboard', component: DashboardComponent }
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
