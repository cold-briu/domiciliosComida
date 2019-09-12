const { Schema, model } = require('mongoose')
const collectionName = 'Entrega'

const EntregaSchema = Schema({

    deliveryId: {
        type: String,
        required: true
    },

    userEmail: { //required val
        type: String,
        required: true,
        select: true //can disable default return on quer7
    },

    driverId: {
        type: String,
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

    orderId: {
        type: String,
        default: "order id"
    },

    timestamp: {
        type: Date,
        default: Date.now
    },

})

module.exports = model(collectionName, EntregaSchema);
