import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaNoticiaComponent } from './lista-noticia/lista-noticia.component';
import { EstatisticaComponent } from './estatistica/estatistica.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {FormsModule} from '@angular/forms';


const rotas: Routes =  [
  {path: 'cadastar', component: CadastroComponent},
  {path: 'listar', component: ListaNoticiaComponent},
  {path: 'estatisticas', component: EstatisticaComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListaNoticiaComponent,
    EstatisticaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
