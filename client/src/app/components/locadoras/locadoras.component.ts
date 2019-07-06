import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Locadora } from '../../models/locadora';

@Component({
  selector: 'app-locadoras',
  templateUrl: './locadoras.component.html',
  styleUrls: ['./locadoras.component.css']
})
export class LocadorasComponent implements OnInit {

  displayedColumns: string[] = ['nome','cnpj', 'cidade', 'email'];
  locadoras: Locadora[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocadoras().subscribe(res => {
      this.locadoras = res;
      console.log(this.locadoras);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
