import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-locacao-edicao',
  templateUrl: './locacao-edicao.component.html',
  styleUrls: ['./locacao-edicao.component.css']
})
export class LocacaoEdicaoComponent implements OnInit {

  locacaoForm: FormGroup;
  id: string = '';
  isLoadingResults = true;

  getLocacao(id) {
    this.api.getLocacao(id).subscribe(data => {
      this.id = data.id;
      this.locacaoForm.setValue({
        cpf_cliente: data.cpf_cliente,
        cnpj_locadora: data.cnpj_locadora,
        dia: data.dia,
        hora: data.hora,
      });
      this.isLoadingResults = false;
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateLocacao(this.id, form).subscribe(res => {
      let id = res['id'];
      this.isLoadingResults = false;
      this.router.navigate(['/locacao-detalhes', id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  locacaoDetalhes() {
    this.router.navigate(['/locacao-detalhes', this.id]);
  }

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isLoadingResults = true;
    this.getLocacao(this.route.snapshot.params['id']);
    this.locacaoForm = this.formBuilder.group({
      'cpf_cliente': [null, Validators.required],
      'cnpj_locadora': [null, Validators.required],
      'dia': [null, Validators.required],
      'hora': [null, Validators.required],
    });
  }

}
