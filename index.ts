export interface IUsuario {
    nome: string;
    genero: string;
    pass: string;

    logar(pass: string): boolean;
}

export class Cliente implements IUsuario {
    nome: string;
    genero: string;
    pass: string
    constructor(nome: string, genero: string, pass: string){
        this.nome = nome,
        this.genero = genero,
        this.pass = pass
    }

    logar(pass: string): boolean{
        return true;
    }
}



