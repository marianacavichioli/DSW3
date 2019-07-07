package br.ufscar.dc.dsw
import grails.rest.*

@Resource(uri='/clientes', readOnly = false, formats = ['json', 'xml'])
class Cliente extends User{
    static constraints = {
        nome blank: false 
        cpf blank: false 
        data_nascimento nullable: true
        telefone nullable: true
        sexo nullable: true
    }

    String nome
    String cpf
    String data_nascimento
    String telefone
    String sexo
}
