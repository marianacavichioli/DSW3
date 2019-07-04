package server
import br.ufscar.dc.dsw.Usuario
import br.ufscar.dc.dsw.Cliente
import br.ufscar.dc.dsw.Locadora
import br.ufscar.dc.dsw.Locacao

class BootStrap {
    def init = { servletContext ->
        Usuario usuario = new Usuario(email: 'teste@teste', senha: 'teste')
        usuario.save()

        Locadora locadora = new Locadora (nome: 'locadora1', cnpj: '1')
        locadora.save()

        Cliente cliente = new Cliente(nome: 'cliente1', cpf: '2')
        cliente.save()

        Locacao locacao = new Locacao(cpf_cliente: '2', cnpj_locadora: '1', dia: '11', hora: '11')
        locacao.save()
    }

    def destroy = {
    }   
}