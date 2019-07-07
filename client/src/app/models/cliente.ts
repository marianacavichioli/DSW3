import { User } from './usuario';

export class Cliente extends User{
    nome: string;
    data_nascimento: string;
    sexo: string;
    cpf: string;
    telefone: string;
}