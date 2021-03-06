import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Locadora } from '../../models/locadora';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-locadoras',
  templateUrl: './locadoras.component.html',
  styleUrls: ['./locadoras.component.css']
})
export class LocadorasComponent implements OnInit {

  displayedColumns: string[] = ['nome','cnpj', 'cidade', 'username'];
  locadoras: Locadora[] = [];
  isLoadingResults = true;
  public dataSource = new MatTableDataSource<Locadora>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getLocadoras(){
    this.api.getLocadoras().subscribe(res => {
      this.dataSource.data = res as Locadora[];
      console.log(this.locadoras);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getLocadoras();
  }

}
