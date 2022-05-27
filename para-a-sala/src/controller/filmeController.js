// acessando endereço do banco/jason
const filmesJson = require('../models/filmes-barbie.json')
const express = require('express')
const { request, response, json } = require('express')
const app = express() // executar o express

app.use(express.json()) //fazendo o body parser

const getAll = (request, response) => {
    
    response.status(200).json ([
        {
            "filmes": filmesJson
        }

    ])

}

// declaro minha constante de atualizar o titulo do filme
const updateTitle = (request, response) => {


    // guardo o id que foi enviado no request na constante idRequest (pq params? pq id é especifico e eu uso params para buscas especificas) 
    const idRequest = request.params.id
    // guardo o titulo que foi enviado no body da requisição (pq body? pq pra put , patch e post eu preciso passar um body)
    let novoTitulo = request.body.Title

    // preciso filtrar o meu ''banco de dados'' para encontrar o id que a pessoa digitou
    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    // depois disso, o meu filme a parte especifica do titulo será alterada pelo Novo Titulo que foi enviado
    filmeFiltrado.title = novoTitulo

    // depois disso tudo, mando uma response dizendo q ta tudo OK e envio o filme com a alteraçao
    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        filmesJson
    }])
} 

const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = filmesJson.findIndex( filme => filme.id == idRequest)

// o que isso esta fazendo?
// esta removendo um elemento, a partir de INDEX ENCONTRADO, e adicionando o FILME REQUEST no lugar.
    filmesJson.splice(indexEncontrado, 1 , filmeRequest)

    response.status(200).json([
        {
        "message": "filme atualizado",
        filmesJson
        }
])
}

const deleteFilme = (request, response) => {
    // id que quero deletar
    const idRequest = request.params.id

    // pegar o index do filme que vai ser deletado
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)

    // retira o filme da array de filmes a partir do indice que eu disser
    //array.splice (indice, numero de coisas que vou deletar, item que vou adicionar)
    filmesJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "message": " filme deletado",
        "deletado": idRequest,
        filmesJson
    }])

}


// exportando todas as funções do controller para ser usada no filmesRoutes.json
module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme
}

