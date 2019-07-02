package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/locadoras', readOnly = false, formats = ['json', 'xml'])
class Locadora extends Usuario{
    static constraints = {
        nome blank: false
        cnpj blank: false 
    }

    String nome
    String cnpj
    String cidade

}