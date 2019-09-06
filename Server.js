// crear api rest para domicilios comida
const express = require('express')
const app = express()
const cors = require('cors')
require('./database')



const config = {
    projectName: "domicilios😎",
    port: 6660,
    databaseUrl: "mongodb+srv://admin123:pasod0ble>@anti-cluster-ecidb.mongodb.net/test?retryWrites=true&w=majority"
}



app.set('databaseUrl', "mongodb+srv://admin123:pasod0ble>@anti-cluster-ecidb.mongodb.net/test?retryWrites=true&w=majority")
app.set('port', config.port)

app.use(cors())
app.use(express.json())
app.use(require('./src/routes'))


app.listen(app.get('port'), () => { console.log(`\n· ${config.projectName} server running on... ${app.get('port')}\n`) })