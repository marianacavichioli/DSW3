import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Locadora } from 'src/app/models/locadora';

@Component({
  selector: 'app-locadora-detalhes',
  templateUrl: './locadora-detalhes.component.html',
  styleUrls: ['./locadora-detalhes.component.css']
})
export class LocadoraDetalhesComponent implements OnInit {

  locadora: Locadora = { id: '', nome: '', cnpj: '', cidade: '', username: '', password: ''};
  isLoadingResults = true;

  getLocadoraDetalhes(id) {
    this.api.getLocadora(id).subscribe(data => {
      this.locadora = data;
      console.log(this.locadora);
      this.isLoadingResults = false;
    });
  }

  deleteLocadora(id) {
    this.isLoadingResults = true;
    this.api.deleteLocadora(id).subscribe(res => {
      this.isLoadingResults = false;
      this.router.navigate(['/locadoras']);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    }
    );
  }

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getLocadoraDetalhes(this.route.snapshot.params['id']);
  }

}
