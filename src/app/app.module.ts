import { DietasModule } from './dietas/dietas.module';
import { MedicacaoModule } from './medicacao/medicacao.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UsuariosModule,
    PacientesModule,
    CoreModule,
    SegurancaModule,
    MedicacaoModule,
    DietasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
