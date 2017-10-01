import { Component, OnInit } from '@angular/core'
import { UsuarioService  } from './../usuario.service'

@Component({
  selector: 'app-usuarios-pesquisa',
  templateUrl: './usuarios-pesquisa.component.html',
  styleUrls: ['./usuarios-pesquisa.component.css']
})
export class UsuariosPesquisaComponent implements OnInit{
  
  usuarios = []

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
     this.pesquisar()
  }

  pesquisar() {
    this.usuarioService
      .findAll()
      .then()
      .catch(err => console.log(JSON.stringify(err)))
  }
}
