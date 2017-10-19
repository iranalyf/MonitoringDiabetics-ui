import { paciente } from './paciente'

export class medicacao {
    codigo: number
    descricao: string
    dataMedicacao: Date
    observacao: string
    paciente = new paciente()
}