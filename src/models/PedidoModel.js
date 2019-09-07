const { Schema, model } = require('mongoose')
const collectionName = 'pedido'

const pedidoSchema = Schema({

    userEmail: { //required val
        type: String,
        required: true,
        select: true //can disable default return on quer7
    },

    orderId: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "active" //"done"
    },

    cart: {
        type: Array,
        default: []

    },


    timestamp: {
        type: Date,
        default: Date.now
    },

})

module.exports = model(collectionName, pedidoSchema);
