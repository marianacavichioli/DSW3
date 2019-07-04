import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Locacao } from '../../models/locacao';

@Component({
  selector: 'app-locacao-detalhes',
  templateUrl: './locacao-detalhes.component.html',
  styleUrls: ['./locacao-detalhes.component.css']
})
export class LocacaoDetalhesComponent implements OnInit {
  
  locacao: Locacao = { id: '', cpf_cliente: '', cnpj_locadora: '', dia: '', hora: '' };
  isLoadingResults = true;

  getLocacaoDetalhes(id) {
    this.api.getLocacao(id).subscribe(data => {
      this.locacao = data;
      console.log(this.locacao);
      this.isLoadingResults = false;
    });
  }

  deleteLocacao(id) {
    this.isLoadingResults = true;
    this.api.deleteLocacao(id).subscribe(res => {
      this.isLoadingResults = false;
      this.router.navigate(['/locacoes']);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    }
    );
  }

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getLocacaoDetalhes(this.route.snapshot.params['id']);
  }
}
