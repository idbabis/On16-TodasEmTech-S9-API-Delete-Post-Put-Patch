const app = require('./src/app') //chamando o arquivo app

const PORT = 1313 // configurando a porta

app.listen(PORT, () => {
    console.log(`Estou na porta ${PORT}`)
})

//ou

/* app.listen(1313, () => {
    console.log(`Estou na porta 1313`)
}) */

