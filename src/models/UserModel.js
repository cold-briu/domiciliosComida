const { Schema, model } = require('mongoose')
const collectionName = 'user'

const userSchema = Schema({

    nombre: String,
    puntos: Number,

    email: { //required val
        type: String,
        required: true,
        select: true //can disable default return on quer7
    },

    password: { //required val
        type: String,
        required: true,
        select: false //can disable default return on quer7
    }
})

module.exports = model(collectionName, dummySchema);
