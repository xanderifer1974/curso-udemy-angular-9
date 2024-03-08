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

  getCliente(): Cliente{
    let  cliente: Cliente = new Cliente()
    cliente.nome = "Fulano de Tal";
    cliente.cpf = "41212141241";

    return cliente;

  }
}
