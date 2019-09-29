// DOMICILIOS COMIDA

//dependencies
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const hbs = require('express-handlebars');

const { port, projectName } = require('./config')
require('./database')


//settings
app.set('currentUser', {
    logged: false,
    email: "not logged"
})

app.set('currentDelivery', {
    deliveryId: "none",
    status: "none"
})

app.set('views', path.join(__dirname, 'views'));

//handlebars
app.set('view engine', 'hbs');

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'splash',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));



//middlewares
app.use(express.json())
    .use(cors())
    .use(express.urlencoded({ extended: false }))
    .use('/public', express.static(path.join(__dirname, './public')));;

//routes

app.use('/', require('./src/routes/router.views'))
app.use('/api', require('./src/routes/router.api'))


// app.get('/', (req, res) => res.send('¡Esto es domicilios comida!'))

// here we go...
app.listen(port, () => { console.log(`\n· ${projectName} server running on... ${port}\n`) })