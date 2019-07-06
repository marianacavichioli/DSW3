import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cliente-edicao',
  templateUrl: './cliente-edicao.component.html',
  styleUrls: ['./cliente-edicao.component.css']
})
export class ClienteEdicaoComponent implements OnInit {

  clienteForm: FormGroup;
  id: string = '';
  isLoadingResults = true;

  getCliente(id) {
    this.api.getCliente(id).subscribe(data => {
      this.id = data.id;
      this.clienteForm.setValue({
        nome: data.nome,
        data_nascimento: data.data_nascimento,
        sexo: data.sexo,
        cpf: data.cpf,
        telefone: data.telefone,
        email: data.email,
        senha: data.senha,
      });
      this.isLoadingResults = false;
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateCliente(this.id, form).subscribe(res => {
      let id = res['id'];
      this.isLoadingResults = false;
      this.router.navigate(['/cliente-detalhes', id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  clienteDetalhes() {
    this.router.navigate(['/cliente-detalhes', this.id]);
  }

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isLoadingResults = true;
    this.getCliente(this.route.snapshot.params['id']);
    this.clienteForm = this.formBuilder.group({
      'nome': [null, Validators.required],
      'cpf': [null, Validators.required],
      'telefone': [null, Validators.required],
      'data_nascimento': [null, Validators.required],
      'sexo': [null, Validators.required],
      'email': [null, Validators.required],
      'senha': [null, Validators.required],
    });
  }

}
