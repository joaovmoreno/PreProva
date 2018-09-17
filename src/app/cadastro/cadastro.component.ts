import { Component, OnInit } from '@angular/core';
import {NoticiasService} from '../noticias.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  titulo = null;
  conteudo = null;
  tag = null;
  autor = null;
  emailDoAutor = null;
  pais = null;

  nextId: number;



  constructor(private service: NoticiasService) {
    this.nextId = 2;
  }

  ngOnInit() {
  }
  salvar(form) {

    this.service.noticias.push({
      id: this.nextId,
      titulo: this.titulo,
      tag : this.tag,
      autor : {
        id : this.service.noticias.length,
        nome : this.autor,
        email : this.emailDoAutor,
        pais : this.pais
      },
      conteudo : this.conteudo
    });
    this.nextId++;
    form.reset();
    console.log(this.service.noticias);

  }
}
