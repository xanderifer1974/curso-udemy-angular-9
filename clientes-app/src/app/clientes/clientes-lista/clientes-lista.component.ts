import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ClientesService,
    private router: Router
  ) { }

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

  novoCadastro() {
    this.router.navigate(['/clientes-form'])
  }

  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente() {
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = `Cliente ${this.clienteSelecionado.nome} deletado(a) com sucesso!`
          this.ngOnInit();
        },
        error => this.mensagemErro = `Erro ao deletar o(a) cliente ${this.clienteSelecionado.nome}.`
      )
  }





}
