import { Component, OnInit } from '@angular/core';
import {NoticiasService} from '../noticias.service';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.css']
})
export class EstatisticaComponent implements OnInit {
  totalNoticia = null;
  autorQueMaisPublica = [];
  constructor(private service: NoticiasService) {
    // this.service.PalavraMaisFrequenteTitulo();
  }

  ngOnInit() {
    this.TotalNoticias();
    this.AutorQueMaisPublica();
  }
  TotalNoticias() {
    this.totalNoticia = this.service.TotalDeNoticias();
  }
  AutorQueMaisPublica() {
    this.autorQueMaisPublica = this.service.AutorMaisPublica();
  }
}
