let clientesTrybeBank = ['Ada', 'John', 'Gus'];

//Criando a função
function adicionarCliente(cliente) {
    if(typeof cliente === 'string')  {
        clientesTrybeBank.push(cliente)

    } else {
        return 'o parametro deve ser uma string'
    }
}

function removerCliente(cliente) {
    if(typeof cliente === 'string' && typeof cliente === clientesTrybeBank) {
        clientesTrybeBank.splice(cliente)

    } else {
        return 'o parametro deve ser uma string'
    }
    
}

adicionarCliente('Mew')

console.log(clientesTrybeBank)