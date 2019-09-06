const { Schema, model } = require('mongoose')

const templateSchema = {
    nombre: String,
    puntos: Number,
    id: { //required val
        type: Number,
        required: true,
        //select: false //can disable default return on quer7
    }
}

const collectionName = 'dummy'


const dummySchema = Schema(templateSchema)

module.exports = model(collectionName, dummySchema);
