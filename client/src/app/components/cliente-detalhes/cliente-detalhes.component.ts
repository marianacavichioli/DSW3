import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {

  cliente: Cliente = { id: '', nome: '', data_nascimento: '', sexo: '', cpf: '', telefone: '', username: '', password: ''};
  isLoadingResults = true;

  getClienteDetalhes(id) {
    this.api.getCliente(id).subscribe(data => {
      this.cliente = data;
      console.log(this.cliente);
      this.isLoadingResults = false;
    });
  }

  deleteCliente(id) {
    this.isLoadingResults = true;
    this.api.deleteCliente(id).subscribe(res => {
      this.isLoadingResults = false;
      this.router.navigate(['/clientes']);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    }
    );
  }

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getClienteDetalhes(this.route.snapshot.params['id']);
  }

}
