import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosPesquisaComponent } from './usuarios-pesquisa.component';

describe('UsuariosPesquisaComponent', () => {
  let component: UsuariosPesquisaComponent;
  let fixture: ComponentFixture<UsuariosPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
