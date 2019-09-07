const { Schema, model } = require('mongoose')
const collectionName = 'Entrega'

const EntregaSchema = Schema({

    deliveryId: {
        type: Number,
        required: true
    },

    userEmail: { //required val
        type: String,
        required: true,
        select: true //can disable default return on quer7
    },

    driverId: {
        type: Number,
        required: true
    },

    distanceLeft: {
        type: Number,
        required: true
    },

    userLocation: { //required val
        type: String,
        required: true,
        default: "active" //"done"
    },

    status: { //required val
        type: String,
        required: true,
        default: "queued" //"preparing", "onWay", "done"
    },

    products: {
        type: Array,
        default: ["ordersId"]
    },

    timestamp: {
        type: Date,
        default: Date.now
    },

})

module.exports = model(collectionName, EntregaSchema);
