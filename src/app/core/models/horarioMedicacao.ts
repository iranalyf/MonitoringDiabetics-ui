import { medicacao } from './medicacao'

export class horarioMedicacao {
    codigo: number
    horario: string
    dataFim: Date
    medicacao = new medicacao()
}