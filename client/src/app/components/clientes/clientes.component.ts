import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'data_nascimento', 'sexo', 'cpf', 'telefone', 'email', 'senha'];
  clientes: Cliente[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getClientes().subscribe(res => {
      this.clientes = res;
      console.log(this.clientes);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
