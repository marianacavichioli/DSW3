package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/locacoes', readOnly = false, formats = ['json', 'xml'])
class Locacao {
    static constraints = {
        cpf_cliente blank: false 
        cnpj_locadora blank: false 
        dia blank: false
        hora blank: false
    }

    Long id
    String cpf_cliente
    String cnpj_locadora
    String dia
    String hora

}