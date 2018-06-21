const express = require('express');
const database = require('./database');
const todoController = require('./controllers/todocontroller')
const schemaItem = require('./models/todo-item')

let app = express()

/*determianr el motor de templates*/
app.set('view engine','ejs')

/*Determinar las rutas staticas */
// app.set('/assets',express.static('./public'))
app.use(express.static('./public'))


/*Asignar controladores que usen express*/
todoController(app,schemaItem);

app.listen(3000)
console.log('server up on 3000')

