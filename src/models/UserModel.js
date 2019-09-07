const { Schema, model } = require('mongoose')
const collectionName = 'user'

const userSchema = Schema({

    nombre: { //required val
        type: String,
        required: true,
        select: true //can disable default return on quer7
    },

    email: { //required val
        type: String,
        required: true,
        select: true //can disable default return on quer7
    },

    password: { //required val
        type: String,
        required: true,
        select: true //can disable default return on quer7
    },



    historial: {
        type: Array,
        default: []
    },

    since: {
        type: Date,
        default: Date.now
    },

})

module.exports = model(collectionName, userSchema);
