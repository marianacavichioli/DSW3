import { Usuario } from './usuario';

export class Cliente extends Usuario {
    nome: string;
    data_nascimento: string;
    sexo: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
}