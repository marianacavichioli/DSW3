import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocacoesComponent } from './components/locacoes/locacoes.component';
import { LocacaoDetalhesComponent } from './components/locacao-detalhes/locacao-detalhes.component';
import { LocacaoCadastroComponent } from './components/locacao-cadastro/locacao-cadastro.component';
import { LocacaoEdicaoComponent } from './components/locacao-edicao/locacao-edicao.component';

const routes: Routes = [
  {
    path: 'locacoes', component: LocacoesComponent, data: { title: 'Lista de Locações' }
  },
  {
    path: 'locacao-detalhes/:id', component: LocacaoDetalhesComponent, data: { title: 'Detalhes Locação' }
  },
  {
    path: 'locacao-cadastro', component: LocacaoCadastroComponent, data: { title: 'Cadastro Locação' }
  },
  {
    path: 'locacao-edicao/:id', component: LocacaoEdicaoComponent, data: { title: 'Edição Locação' }
  },
  {
    path: '', redirectTo: '/locacoes', pathMatch: 'full'
  }
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
