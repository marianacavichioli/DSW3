import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Locacao } from '../../models/locacao';

@Component({
  selector: 'app-locacoes',
  templateUrl: './locacoes.component.html',
  styleUrls: ['./locacoes.component.css']
})

export class LocacoesComponent implements OnInit {

  displayedColumns: string[] = ['cpf_cliente', 'cnpj_locadora', 'dia', 'hora'];
  locacoes: Locacao[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocacoes().subscribe(res => {
      this.locacoes = res;
      console.log(this.locacoes);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
