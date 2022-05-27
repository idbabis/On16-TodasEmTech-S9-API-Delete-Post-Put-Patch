// centralizando o conteudo da aplicação
//rota raiz


const express = require("express") //importanto o express

//importe da continuação das rotas de filmes
const filmeRoutes = require("./routes/filmeRoutes")

const app = express()  //executo o express

app.use(express.json())  // uso o badyparser

//criar uma rota raiz
app.use("/filmes", filmeRoutes)

// exportando para usar o server.js
module.exports = app

