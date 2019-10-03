// DOMICILIOS COMIDA

//dependencies
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const exhbs = require('express-handlebars');

const hbsConfig = require('./config/hbs.config')
const { port, projectName } = require('./config/env.config')
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


//handlebars

app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', exhbs.create(hbsConfig).engine);
app.set('view engine', 'hbs');



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