export class AlunoCurso  {
    codigo_matricula?: number
    codigo!: number
    nome!: string

    constructor(nome: string, codigo : number){
        this.nome = nome
        this.codigo = codigo
    }
}