const controller = require('../controller/pokemonController')

const express = require('express') //chamar express

const router = express.Router()

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller. updateName)
router.put("/change/:id", controller. updateNew)
router.delete("/delete/:id",controller. deletePokedex)

module.exports = router


