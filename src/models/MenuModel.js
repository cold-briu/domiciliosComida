const { Schema, model } = require('mongoose')
const collectionName = 'Menu'

const MenuSchema = Schema({

    itemId: { //required val
        type: String,
        required: true,
        select: true //can disable default return on quer7
    },

    productName: { //required val
        type: String,
        required: true,
        select: true //can disable default return on quer7
    },

    description: { //required val
        default: "no description yet",
        type: String,
    },

    stock: { //required val
        type: Number,
        default: 0,
    },

    price: {
        type: Number,
        default: 0
    }
})

module.exports = model(collectionName, MenuSchema);
