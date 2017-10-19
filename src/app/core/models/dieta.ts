import { usuario } from './usuario'
import { paciente } from './paciente'

export class dieta {
    codigo: number
    dataInicio: Date
    dataFim: Date
    descricao: string
    cafeManha: string
    lancheManha: string
    almoco: string
    sobremesaAlmoco: string
    lancheTarde: string
    janta: string
    lancheNoite
    qtdeAguaDiaria: string
    observacao: string
    //usuario = new usuario()
    paciente = new paciente()
}