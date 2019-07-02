package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/clientes', readOnly = false, formats = ['json', 'xml'])
class Cliente extends Usuario{
    static constraints = {
        nome blank: false
        cpf blank: false 
    }

    String nome
    String data_nascimento
    String sexo
    String cpf
    String telefone
}