import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';

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
  MatFormFieldModule, MatToolbarModule, MatSidenavModule, MatListModule } from "@angular/material";

import { LocacaoCadastroComponent } from './components/locacao-cadastro/locacao-cadastro.component';
import { LocacaoDetalhesComponent } from './components/locacao-detalhes/locacao-detalhes.component';
import { LocacaoEdicaoComponent } from './components/locacao-edicao/locacao-edicao.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';
import { ClienteEdicaoComponent } from './components/cliente-edicao/cliente-edicao.component';
import { LocadoraCadastroComponent } from './components/locadora-cadastro/locadora-cadastro.component';
import { LocadoraDetalhesComponent } from './components/locadora-detalhes/locadora-detalhes.component';
import { LocadoraEdicaoComponent } from './components/locadora-edicao/locadora-edicao.component';
import { AlertComponent } from './components/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    LocadorasComponent,
    LocacoesComponent,
    LocacaoCadastroComponent,
    LocacaoDetalhesComponent,
    LocacaoEdicaoComponent,
    ClienteCadastroComponent,
    ClienteDetalhesComponent,
    ClienteEdicaoComponent,
    LocadoraCadastroComponent,
    LocadoraDetalhesComponent,
    LocadoraEdicaoComponent,
    AlertComponent,
    LoginComponent,
    MainNavComponent
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
    MatFormFieldModule,
    NgxMaskModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['http://localhost:8080/LocacoesRS/api/login',
          'http://localhost:8080/LocacoesRS/oauth/access_token']
      }
}),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
