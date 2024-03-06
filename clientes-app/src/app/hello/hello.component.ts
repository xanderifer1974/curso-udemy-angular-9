import {Component} from '@angular/core'


@Component({
    selector:'hello',
    templateUrl: './hello.component.html'

})
export class HelloComponent{

    nome:string;
    clientes: Clientes[]

    constructor(){
        this.nome = "Alexandre";
        let fulano = new Clientes("Fulano",30);
        let cicrano = new Clientes("Cicrano",70);
        let beltrano = new Clientes("Beltrano",18)
        this.clientes = [fulano,cicrano, beltrano]

    }
}

 class Clientes {
    constructor(
      public nome: string,
      public idade: number
    ) { }
  }