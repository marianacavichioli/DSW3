import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { Cliente } from '../models/cliente';
import { Locadora } from '../models/locadora';
import { Locacao } from '../models/locacao';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:8080/LocacoesRS";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUsuarios (): Observable<Usuario[]> {
    const url = `${apiUrl}/usuarios`;
    return this.http.get<Usuario[]>(url).pipe(
      tap(heroes => console.log('getUsuarios')),
      catchError(this.handleError('getUsuarios', []))
    );
  }

  getUsuario(id: number): Observable<Usuario> {
    const url = `${apiUrl}/usuarios/${id}`;
    return this.http.get<Usuario>(url).pipe(
      tap(_ => console.log(`getUsuario id=${id}`)),
      catchError(this.handleError<Usuario>(`getUsuario id=${id}`))
    );
  }

  addUsuario (usuario): Observable<Usuario> {
    const url = `${apiUrl}/usuarios`;
    return this.http.post<Usuario>(url, usuario, httpOptions).pipe(
      tap((usuario: Usuario) => console.log(`addUsuario w/id=${usuario.id}`)),
      catchError(this.handleError<Usuario>('addUsuario'))
    );
  }

  updateUsuario (id, usuario): Observable<any> {
    const url = `${apiUrl}/usuarios/${id}`;
    return this.http.put(url, usuario, httpOptions).pipe(
      tap(_ => console.log(`updateUsuario id=${id}`)),
      catchError(this.handleError<any>('updateUsuario'))
    );
  }

  deleteUsuario (id): Observable<Usuario> {
    const url = `${apiUrl}/usuarios/${id}`;
    return this.http.delete<Usuario>(url, httpOptions).pipe(
      tap(_ => console.log(`deleteUsuario id=${id}`)),
      catchError(this.handleError<Usuario>('deleteUsuario'))
    );
  }

  getClientes (): Observable<Cliente[]> {
    const url = `${apiUrl}/clientes`;
    return this.http.get<Cliente[]>(url).pipe(
      tap(heroes => console.log('getClientes')),
      catchError(this.handleError('getClientes', []))
    );
  }

  getCliente(id: number): Observable<Cliente> {
    const url = `${apiUrl}/clientes/${id}`;
    return this.http.get<Cliente>(url).pipe(
      tap(_ => console.log(`getCliente id=${id}`)),
      catchError(this.handleError<Cliente>(`getCliente id=${id}`))
    );
  }

  addCliente (cliente): Observable<Cliente> {
    const url = `${apiUrl}/clientes`;
    return this.http.post<Cliente>(url, cliente, httpOptions).pipe(
      tap((cliente: Cliente) => console.log(`addCliente w/id=${cliente.id}`)),
      catchError(this.handleError<Cliente>('addCliente'))
    );
  }

  updateCliente (id, cliente): Observable<any> {
    const url = `${apiUrl}/clientes/${id}`;
    return this.http.put(url, cliente, httpOptions).pipe(
      tap(_ => console.log(`updateCliente id=${id}`)),
      catchError(this.handleError<any>('updateCliente'))
    );
  }

  deleteCliente (id): Observable<Cliente> {
    const url = `${apiUrl}/clientes/${id}`;
    return this.http.delete<Cliente>(url, httpOptions).pipe(
      tap(_ => console.log(`deleteCliente id=${id}`)),
      catchError(this.handleError<Cliente>('deleteCliente'))
    );
  }

  getLocacoes (): Observable<Locacao[]> {
    const url = `${apiUrl}/locacoes`;
    return this.http.get<Locacao[]>(url).pipe(
      tap(heroes => console.log('getLocacoes')),
      catchError(this.handleError('getLocacoes', []))
    );
  }

  getLocacao(id: number): Observable<Locacao> {
    const url = `${apiUrl}/locacoes/${id}`;
    return this.http.get<Locacao>(url).pipe(
      tap(_ => console.log(`getLocacao id=${id}`)),
      catchError(this.handleError<Locacao>(`getLocacao id=${id}`))
    );
  }

  addLocacao (locacao): Observable<Locacao> {
    const url = `${apiUrl}/locacoes`;
    return this.http.post<Locacao>(url, locacao, httpOptions).pipe(
      tap((locacao: Locacao) => console.log(`addLocacao w/id=${locacao.id}`)),
      catchError(this.handleError<Locacao>('addLocacao'))
    );
  }

  updateLocacao (id, locacao): Observable<any> {
    const url = `${apiUrl}/locacoes/${id}`;
    return this.http.put(url, locacao, httpOptions).pipe(
      tap(_ => console.log(`updateLocacao id=${id}`)),
      catchError(this.handleError<any>('updateLocacao'))
    );
  }

  deleteLocacao (id): Observable<Locacao> {
    const url = `${apiUrl}/locacoes/${id}`;
    return this.http.delete<Locacao>(url, httpOptions).pipe(
      tap(_ => console.log(`deleteLocacao id=${id}`)),
      catchError(this.handleError<Locacao>('deleteLocacao'))
    );
  }

  getLocadoras (): Observable<Locadora[]> {
    const url = `${apiUrl}/locadoras`;
    return this.http.get<Locadora[]>(url).pipe(
      tap(heroes => console.log('getLocadoras')),
      catchError(this.handleError('getLocadoras', []))
    );
  }

  getLocadora(id: number): Observable<Locadora> {
    const url = `${apiUrl}/locadoras/${id}`;
    return this.http.get<Locadora>(url).pipe(
      tap(_ => console.log(`getLocadora id=${id}`)),
      catchError(this.handleError<Locadora>(`getLocadora id=${id}`))
    );
  }

  addLocadora (locadora): Observable<Locadora> {
    const url = `${apiUrl}/locadoras`;
    return this.http.post<Locadora>(url, locadora, httpOptions).pipe(
      tap((locadora: Locadora) => console.log(`addLocadora w/id=${locadora.id}`)),
      catchError(this.handleError<Locadora>('addLocadora'))
    );
  }

  updateLocadora (id, locadora): Observable<any> {
    const url = `${apiUrl}/clientes/${id}`;
    return this.http.put(url, locadora, httpOptions).pipe(
      tap(_ => console.log(`updateLocadora id=${id}`)),
      catchError(this.handleError<any>('updateLocadora'))
    );
  }

  deleteLocadora (id): Observable<Locadora> {
    const url = `${apiUrl}/locadoras/${id}`;
    return this.http.delete<Locadora>(url, httpOptions).pipe(
      tap(_ => console.log(`deleteLocadora id=${id}`)),
      catchError(this.handleError<Locadora>('deleteLocadora'))
    );
  }
}
