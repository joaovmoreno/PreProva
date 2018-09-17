import { Component, OnInit } from '@angular/core';
import {NoticiasService} from '../noticias.service';

@Component({
  selector: 'app-lista-noticia',
  templateUrl: './lista-noticia.component.html',
  styleUrls: ['./lista-noticia.component.css']
})
export class ListaNoticiaComponent implements OnInit {

  noticias = null;
  constructor(private service: NoticiasService) { }

  ngOnInit() {
    this.noticias = this.service.noticias;
    console.log(this.noticias);
  }

}
