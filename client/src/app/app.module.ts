import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LocadorasComponent } from './components/locadoras/locadoras.component';
import { LocacoesComponent } from './components/locacoes/locacoes.component';

import {MatSelectModule} from '@angular/material/select';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { LocacaoCadastroComponent } from './components/locacao-cadastro/locacao-cadastro.component';
import { LocacaoDetalhesComponent } from './components/locacao-detalhes/locacao-detalhes.component';
import { LocacaoEdicaoComponent } from './components/locacao-edicao/locacao-edicao.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ClientesComponent,
    LocadorasComponent,
    LocacoesComponent,
    LocacaoCadastroComponent,
    LocacaoDetalhesComponent,
    LocacaoEdicaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
