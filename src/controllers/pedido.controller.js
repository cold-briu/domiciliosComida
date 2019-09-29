const Pedidos = require('../models/PedidoModel')
const Entregas = require('../models/EntregaModel')
const Users = require('../models/UserModel')


exports.proceed = async (req, res) => {
    try {

        const currentOrder = await Pedidos.findOne({ orderId: req.params.id })
        const newDelivery = await Entregas({
            ...req.body,
            userEmail: currentOrder.userEmail,
            orderId: currentOrder.orderId
        })

        await newDelivery.save()

        const currentUser = await Users.findOne({ email: currentOrder.userEmail })
        currentUser.historial.push({
            order: currentOrder.orderId,
            delivery: req.body.deliveryId
        })
        await currentUser.save()
        res.send(`recibido! deliv :
        ${newDelivery}`)

    } catch (error) {
        console.error("error on proceed", error);
    }
}

// C

exports.create = async (req, res) => {
    const newPedido = Pedidos(req.body)
    try {
        await newPedido.save();
        res.status(200)
        res.json({
            status: 200,
            msj: 'Se agregó un nuevo cliente'
        });
    } catch (error) {
        console.error("error on createPedido", error);
    }
}

// R

exports.read = async (req, res) => {
    try {
        const data = await Pedidos.find({});
        res.json(data);
    } catch (error) {
        console.error("error on Pedidos read", error);
    }
}

// U

exports.update = async (req, res) => {
    try {
        await Pedidos.findOneAndUpdate(
            { orderId: req.params.id },
            req.body,
            { new: true },
            (err, updatedPedido) =>
                res.json({ updatedPedido })
        );
    } catch (err) {
        console.error("error on Pedido update", err);
    }
}

// D

exports.delete = async (req, res) => {
    try {
        await Pedidos.remove({ orderId: req.params.id })
        res.json({ mesaje: `Deleted ${req.params.id}` })
    } catch{
        console.log("error on Pedido delete", err);

    }

}
