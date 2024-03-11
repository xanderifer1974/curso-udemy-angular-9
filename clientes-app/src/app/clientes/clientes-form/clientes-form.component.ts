import { Component, OnInit } from '@angular/core';

import {Cliente} from '../cliente'

import {ClientesService} from '../../clientes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  error: boolean = false;

  constructor(private service: ClientesService) {
   this.cliente = new Cliente();   
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      this.success = false;
      this.error = true;
      return;
    }else{
      this.service.salvar(this.cliente)
      .subscribe(response =>{
      this.success = true;
      this.cliente = response;
      });
      this.error=false;
    } 
    /*
    Neste exemplo, estamos fazendo uma validação simples pois estamos utilizando o json-server. Porém no caso do erro
    vindo de api, faremos da seguinte formar

    this.service.salvar(this.cliente)
      .subscribe(response =>{
      this.success = true;
      }, errorResponse =>{

        //Aqui nos capturamos os erros vindos da API, podendo ser através de um array de erros e exibindo os mesmso
        no front-end
      });
    */
  }

}
