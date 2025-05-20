const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')
const MotosController = require('./controller/MotosController')
const IndexController= require('./controller/IndexController')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', IndexController.index)
app.get('/motos', MotosController.Motos)
app.get('/motos/:id', MotosController.Details)
// const PORT = process.env.PORT || 3000
// app.listen(PORT, _ => console.log(`server running on ${PORT}`))

module.exports = app