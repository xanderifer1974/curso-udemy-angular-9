import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente(): Cliente{
    let  cliente: Cliente = new Cliente()
    cliente.nome = "Fulano de Tal";
    cliente.cpf = "41212141241";

    return cliente;

  }
}
