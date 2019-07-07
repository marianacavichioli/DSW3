package br.ufscar.dc.dsw

import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_LOCADORA', 'ROLE_ADMIN'])
class LocacaoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    LocacaoController() {
        super(Locacao)
    }
}