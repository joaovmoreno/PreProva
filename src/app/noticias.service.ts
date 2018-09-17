import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  noticias = [];

  constructor() {
    this.primeiraNoticia();
  }
  primeiraNoticia() {
    this.noticias.push( {
      id: 1,
      titulo: 'Primeira Noticia',
      tag : 'Mundo',
      autor : {
        id : 1,
        nome : 'Joao das Nuticas',
        email : 'test@mail.com',
        pais : 'Brasil'
      },
      conteudo : 'Esta e a primeira Noticia cadastrada neste teste'
    });
    return this.noticias;
  }
  TotalDeNoticias() {
    return this.noticias.length;
  }
  AutorMaisPublica(){
    let contador ;
    for (let noticia of this.noticias){
      contador = contador[noticia.autor.nome]++;
    }
    console.log(contador);
    return contador;
  }
  // PalavraMaisFrequenteTitulo() {
  //   for (let palavra of this.noticias) {
  //     console.log(palavra.titulo);
  //       this.palavraFrequente.push(palavra.titulo);
  //   }
  //   // this.palavraFrequente.split(' ');
  //   console.log(this.palavraFrequente);
  // }


}
