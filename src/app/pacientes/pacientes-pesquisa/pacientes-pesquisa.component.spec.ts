import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesPesquisaComponent } from './pacientes-pesquisa.component';

describe('PacientesPesquisaComponent', () => {
  let component: PacientesPesquisaComponent;
  let fixture: ComponentFixture<PacientesPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
