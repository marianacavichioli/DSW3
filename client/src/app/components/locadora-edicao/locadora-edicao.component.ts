import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-locadora-edicao',
  templateUrl: './locadora-edicao.component.html',
  styleUrls: ['./locadora-edicao.component.css']
})
export class LocadoraEdicaoComponent implements OnInit {

  locadoraForm: FormGroup;
  id: string = '';
  isLoadingResults = true;

  getLocadora(id) {
    this.api.getLocadora(id).subscribe(data => {
      this.id = data.id;
      this.locadoraForm.setValue({
        nome: data.nome,
        cnpj: data.cnpj,
        cidade: data.cidade,
        username: data.username,
        password: data.password,
      });
      this.isLoadingResults = false;
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateLocadora(this.id, form).subscribe(res => {
      let id = res['id'];
      this.isLoadingResults = false;
      this.router.navigate(['/locadora-detalhes', id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  locadoraDetalhes() {
    this.router.navigate(['/locadora-detalhes', this.id]);
  }

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isLoadingResults = true;
    this.getLocadora(this.route.snapshot.params['id']);
    this.locadoraForm = this.formBuilder.group({
      'nome': [null, Validators.required],
      'cnpj': [null, Validators.required],
      'cidade': [null, Validators.required],
      'username': [null, Validators.required],
      'password': [null, Validators.required],
    });
  }

}
