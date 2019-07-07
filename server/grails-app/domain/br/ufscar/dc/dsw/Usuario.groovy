package br.ufscar.dc.dsw
import grails.rest.*

@Resource(uri='/usuarios', readOnly = false, formats = ['json', 'xml'])
class Usuario {
    static constraints = {
        email blank: false, unique: true
        senha blank: false
    }

    Long id
    String email
    String senha
}