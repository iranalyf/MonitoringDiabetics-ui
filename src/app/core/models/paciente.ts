import { doenca } from './doenca'
import { endereco } from './endereco'

export class paciente {
    codigo: number
    primeiroNome: string
    sobrenome: string
    dataNascimento: Date
    cpf: string
    telefone: string
    email: string
    senha: string
    situacao: boolean
    endereco = new endereco()
    doenca = new doenca()
}


