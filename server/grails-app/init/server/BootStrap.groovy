package server
import br.ufscar.dc.dsw.Cliente
import br.ufscar.dc.dsw.Locadora
import br.ufscar.dc.dsw.Locacao
import br.ufscar.dc.dsw.User
import br.ufscar.dc.dsw.Role
import br.ufscar.dc.dsw.UserRole

class BootStrap {
    def init = { servletContext ->

        Role roleAdmin = new Role(authority: 'ROLE_ADMIN').save()
        Role roleCliente = new Role(authority: 'ROLE_CLIENTE').save()
        Role roleLocadora = new Role(authority: 'ROLE_LOCADORA').save()

        User admin = new User(username: "admin@admin", password: "admin").save()
        UserRole.create(admin, roleAdmin, true)

        Locadora locadora = new Locadora (nome: 'locadora1', cnpj: '1', cidade:'teste', username: 'locadora@locadora', password:'teste')
        locadora.save()
        UserRole.create(locadora, roleLocadora, true)

        Cliente cliente = new Cliente(nome: 'cliente1', cpf: '2', username: 'cliente@cliente', password:'teste')
        cliente.save()
        UserRole.create(cliente, roleCliente, true)

        Locacao locacao = new Locacao(cpf_cliente: '2', cnpj_locadora:'1', dia: '11', hora: '11')
        locacao.save()

        if (admin.hasErrors()) {
             println admin.errors
        }
        if (locadora.hasErrors()) {
            println locadora.errors
        }
        if (cliente.hasErrors()) {
            println cliente.errors
        }
    }

    def destroy = {
    }
}