import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-locacao-cadastro',
  templateUrl: './locacao-cadastro.component.html',
  styleUrls: ['./locacao-cadastro.component.css']
})
export class LocacaoCadastroComponent implements OnInit {

  locacaoForm: FormGroup;
  isLoadingResults = false;

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addLocacao(form).subscribe(res => {
      let id = res['id'];
      this.isLoadingResults = false;
      this.router.navigate(['/locacao-detalhes', id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.locacaoForm = this.formBuilder.group({
      'cpf_cliente': [null, Validators.required],
      'cnpj_locadora': [null, Validators.required],
      'dia': [null, Validators.required],
      'hora': [null, Validators.required],
    });
  }

}
