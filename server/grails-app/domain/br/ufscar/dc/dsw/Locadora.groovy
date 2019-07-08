package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/locadoras', readOnly = false, formats = ['json', 'xml'])
class Locadora extends User{
    static constraints = {
        nome blank: false
        cnpj blank: false, unique: true
        cidade blank: false
    }

    String nome
    String cnpj
    String cidade

}