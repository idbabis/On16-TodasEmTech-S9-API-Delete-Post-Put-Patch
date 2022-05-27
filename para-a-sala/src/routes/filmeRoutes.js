// as rotas e metodos de filmes

// chamar o controller de filmes

const controller = require('../controller/filmeController')

const express = require('express') //chamar express

//funcão de rotas do express
const router = express.Router()

// router. metodo http (rota, função)
router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/:id",controller.deleteFilme)

// exportando para ser usado no app.js
module.exports = router


