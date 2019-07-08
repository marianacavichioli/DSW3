package br.ufscar.dc.dsw

import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class ClienteController extends RestfulController {
    static responseFormats = ['json', 'xml']
    ClienteController() {
        super(Cliente)
    }

    @Secured(['permitAll()'])
    @Override
    def index(Integer max) {
        super.index(max)
    }

    @Secured(['permitAll()'])
    @Override
    def show() {
        super.show()
}
}