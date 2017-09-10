import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesCadastroComponent } from './pacientes-cadastro.component';

describe('PacientesCadastroComponent', () => {
  let component: PacientesCadastroComponent;
  let fixture: ComponentFixture<PacientesCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
