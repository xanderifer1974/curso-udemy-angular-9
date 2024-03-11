export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataCadastro: string = this.formatedDate();
    dataFormatadaPtBr:string = this.formatedDatePtBr();

    formatedDate() {
        const data = new Date();
        const dataCadastro = `${data.getFullYear()}-${(data.getMonth() + 1).toString().padStart(2, '0')}-${data.getDate().toString().padStart(2, '0')}`;
        return dataCadastro;

    }

    formatedDatePtBr (){
        const dataParts = this.dataCadastro.split('-');
        const dataFormatada = `${dataParts[2]}/${dataParts[1]}/${dataParts[0]}`;
        return dataFormatada;
    }


}