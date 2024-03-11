import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  Url:string = "http://localhost:3000/Clientes";

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.Url, cliente);

  }

  getClientes(): Observable<Cliente[]>{
    return  this.http.get<Cliente[]>(this.Url);
  }

  getClienteById(id: number) :Observable<Cliente>{

    return  this.http.get<Cliente>(`${this.Url}/${id}`);

  }
  
}
