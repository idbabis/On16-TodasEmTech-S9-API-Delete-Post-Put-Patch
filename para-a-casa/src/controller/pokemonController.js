const pokemonJson = require('../models/pokedex.json')
const express = require('express')
const { request, response, json } = require('express')
const app = express() 

app.use(express.json()) 

const getAll = (request, response) => {
    
    response.status(200).json ([
        {
            "pokedex": pokemonJson
        }

    ])

}

const updateName = (request, response) => {
 
    const idRequest = request.params.id
    
    let novoName = request.body.name

    
    pokedexFiltrado = pokemonJson.find(pokedex => pokedex.id == idRequest)

    pokedexFiltrado.name = novoName

    response.status(200).json([{
        "mensagem": "seu POkemon foi atualizado",
        pokemonJson
    }])
} 

const updateNew = (request, response) => {

    const idRequest = request.params.id
    let pokedexRequest = request.body

    let indexEncontrado = pokemonJson.findIndex( pokedex => pokedex.id == idRequest)

    pokemonJson.splice(indexEncontrado, 1 , pokedexRequest)

    response.status(200).json([
        {
        "message": "POkemon atualizado, será que foi",
        pokemonJson
        }
])
}

const deletePokedex = (request, response) => {

    const idRequest = request.params.id

    const indicePokedex = pokemonJson.findIndex(pokedex => pokedex.id == idRequest)

    pokemonJson.splice(indicePokedex, 1)

    response.status(200).json([{
        "message": " Pokemon deletado, acho que foi",
        "deletado": idRequest,
        pokemonJson
    }])

}


module.exports = {
    getAll,
    updateName,
    updateNew,
    deletePokedex
}

