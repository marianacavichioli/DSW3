import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Locacao } from '../../models/locacao';
import { JWTService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-locacoes',
  templateUrl: './locacoes.component.html',
  styleUrls: ['./locacoes.component.css']
})

export class LocacoesComponent implements OnInit {

  displayedColumns: string[] = ['cpf_cliente', 'cnpj_locadora', 'dia', 'hora'];
  locacoes: Locacao[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService, private jwtService: JWTService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.locacoes = await this.api.getLocacoes().toPromise();

    if (this.jwtService.getRole() == 'ROLE_CLIENTE'){
      function locacoes_cliente(element, index, array) {
        return (element.cliente.username == this.jwtService.getUsername());
      }

      this.locacoes = this.locacoes.filter(locacoes_cliente);
      
    } else if (this.jwtService.getRole() == 'ROLE_LOCADORA') {

      function locacoes_locadora(element, index, array) {
        return (element.locadora.username == this.jwtService.getUsername());
      }

      this.locacoes = this.locacoes.filter(locacoes_locadora);
    }
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

}
