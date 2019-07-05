import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocacoesComponent } from './components/locacoes/locacoes.component';
import { LocacaoDetalhesComponent } from './components/locacao-detalhes/locacao-detalhes.component';
import { LocacaoCadastroComponent } from './components/locacao-cadastro/locacao-cadastro.component';
import { LocacaoEdicaoComponent } from './components/locacao-edicao/locacao-edicao.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteEdicaoComponent } from './components/cliente-edicao/cliente-edicao.component';
import { LocadorasComponent } from './components/locadoras/locadoras.component';
import { LocadoraDetalhesComponent } from './components/locadora-detalhes/locadora-detalhes.component';
import { LocadoraCadastroComponent } from './components/locadora-cadastro/locadora-cadastro.component';
import { LocadoraEdicaoComponent } from './components/locadora-edicao/locadora-edicao.component';


const routes: Routes = [
  { path: 'locacoes', component: LocacoesComponent, data: { title: 'Lista de Locações' }},
  { path: 'locacao-detalhes/:id', component: LocacaoDetalhesComponent, data: { title: 'Detalhes Locação' }},
  { path: 'locacao-cadastro', component: LocacaoCadastroComponent, data: { title: 'Cadastro Locação' }},
  { path: 'locacao-edicao/:id', component: LocacaoEdicaoComponent, data: { title: 'Edição Locação' }},
  { path: 'clientes', component: ClientesComponent, data: {title: 'Lista de Clientes'}},
  { path: 'cliente-detalhes/:id', component: ClienteDetalhesComponent, data: {title: 'Detalhes Cliente'}},
  { path: 'cliente-cadastro', component: ClienteCadastroComponent, data: {title: 'Cadastro Cliente'}},
  { path: 'cliente-edicao/:id', component: ClienteEdicaoComponent, data: {title: 'Edição Cliente'}},
  { path: 'locadoras', component: LocadorasComponent, data: {title: 'Lista de Locadoras'}},
  { path: 'locadora-detalhes/:id', component: LocadoraDetalhesComponent, data: {title: 'Detalhes Locadora'}},
  { path: 'locadora-cadastro', component: LocadoraCadastroComponent, data: {title: 'Cadastro Locadora'}},
  { path: 'locadora-edicao/:id', component: LocadoraEdicaoComponent, data: {title: 'Edição Locadora'}},
  { path: '', redirectTo: '/locadoras', pathMatch: 'full'}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
