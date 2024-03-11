import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styles: [
  ]
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private service: ClientesService) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(clientes => {
      // Percorre o array de clientes e formata o campo dataCadastro
      clientes.forEach(cliente => {
        const dataParts = cliente.dataCadastro.split('-');
        const dataFormatada = `${dataParts[2]}/${dataParts[1]}/${dataParts[0]}`;
        cliente.dataCadastro = dataFormatada;
      });

      // Atribui os clientes formatados à propriedade clientes
      this.clientes = clientes;
    });
  }

  

  

}
