const express = require("express")
const app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/src/home.html")
})

app.get('/cadastro', function(req, res) {
    res.sendFile(__dirname + "/src/cadastro.html")
})

app.post('/cadastro', function(req, res) {
    var nome = req.body.nome
    var sobrenome = req.body.sobrenome
    if (nome == "" || sobrenome == "") {
        res.send("Favor preencher nome e sobrenome")
    } else {
        res.send("Ok informações preenchidas")
    }
})

app.listen(3000, function() {
    console.log("servidor iniciado na porta 3000")
})