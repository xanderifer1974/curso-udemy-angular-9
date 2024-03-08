export class Clientes{
    id:number;
    nome:string;
    cpf:string;
    dataCadastro:string;

    constructor(nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataCadastro = new Date().toLocaleDateString(); 
    }
}