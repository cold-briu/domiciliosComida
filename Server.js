// crear api rest para domicilios comida
const express = require('express')
const app = express()
const cors = require('cors')
require('./database')



const config = {
    projectName: "domicilios😎",
    port: 6060,
    databaseUrl: "mongodb+srv://admin123:pasod0ble>@anti-cluster-ecidb.mongodb.net/test?retryWrites=true&w=majority"
}

app.set('databaseUrl', "mongodb+srv://admin123:pasod0ble>@anti-cluster-ecidb.mongodb.net/test?retryWrites=true&w=majority")
app.set('port', config.port)


app.set('currentCart', [])

app.set('currentUser', {
    logged: false,
    email: "not logged"
})
app.set('currentDelivery', {
    deliveryId: "none",
    status: "none"
})

app.use(cors())
app.use(express.json())
app.use(require('./src/routes/main'))
app.use('/api/users', require('./src/routes/userRoute'))
app.use('/api/pedidos', require('./src/routes/pedidoRoute'))
app.use('/api/entregas', require('./src/routes/entregaRoute'))
app.use('/api/menu', require('./src/routes/menuRoute'))

app.get('/', (req, res) => res.send('uelcom to comida rapida'))


app.listen(process.env.PORT || 5000, () => { console.log(`\n· ${config.projectName} server running on... \n`) })