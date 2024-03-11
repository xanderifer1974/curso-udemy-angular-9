import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Cliente } from '../cliente'

import { ClientesService } from '../../clientes.service';
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
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params = this.activatedRouter.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {       
        this.service.getClienteById(this.id)
          .subscribe(response => {
            this.cliente = response,
              erroResponse => {
                this.cliente = new Cliente()
              }
          })
      }
    })

  }

  onSubmit(form: NgForm) {

    if (this.id) {
      this.EditarCliente(form)

    } else {
      this.SalvarCliente(form);
    }
  }

  voltarParaListagem() {
    return this.router.navigate(['/clientes-lista']);
  }

  SalvarCliente(form: NgForm) {
    if (form.invalid) {
      this.success = false;
      this.error = true;
      return;
    } else {
      this.service.salvar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.cliente = response;
        },errorResponse =>
        {
          this.success = false;
          this.error = true;
        }
        );
      this.error = false;
    }
  }

  EditarCliente(form: NgForm) {
    if (form.invalid) {
      this.success = false;
      this.error = true;
      return;
    } else {
      this.service.atualizar(this.cliente)
      .subscribe(response =>{
        this.success = true;
        this.error = false;

      }, errorResponse =>{
        this.success = false;
        this.error = true;
      })
    
    }
  }
}
