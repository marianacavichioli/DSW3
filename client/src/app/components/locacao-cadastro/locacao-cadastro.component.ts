import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Cliente } from 'src/app/models/cliente';
import { Locadora } from 'src/app/models/locadora';
import { Locacao } from 'src/app/models/locacao';

@Component({
  selector: 'app-locacao-cadastro',
  templateUrl: './locacao-cadastro.component.html',
  styleUrls: ['./locacao-cadastro.component.css']
})
export class LocacaoCadastroComponent implements OnInit {

  clientes: Cliente[] = [];
  locadoras: Locadora[] = [];
  locacoes: Locacao[] = [];
  locacaoForm: FormGroup;
  isLoadingResults = false;

  getData(){
    this.api.getClientes().subscribe(res => {
      this.clientes = res;
    });

    this.api.getLocadoras().subscribe(res => {
      this.locadoras = res;
    });

    this.api.getLocacoes().subscribe(res => {
      this.locacoes = res;
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    let locar = true;
    
    for(let i = 0; i < this.locacoes.length; i++ ){
      if(((form['cpf_cliente'] == this.locacoes[i].cpf_cliente) ||
          (form['cnpj_locadora'] == this.locacoes[i].cnpj_locadora)) && 
            (form['dia'] == this.locacoes[i].dia) &&
            (form['hora'] == this.locacoes[i].hora))
              locar = false;
    }

    if(locar){
      this.api.addLocacao(form).subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/locacao-detalhes', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }else{
      this.isLoadingResults = false;
    }

    
  }

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.locacaoForm = this.formBuilder.group({
      'cpf_cliente': [null, Validators.required],
      'cnpj_locadora': [null, Validators.required],
      'dia': [null, Validators.required],
      'hora': [null, Validators.required],
    });

    this.getData();
  }

}
