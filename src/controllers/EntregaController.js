const Entregas = require('../models/EntregaModel')


// C

exports.create = async (req, res) => {
    const newEntrega = Entregas(req.body)
    try {
        await newEntrega.save();
        res.status(200)
        res.json({
            status: 200,
            msj: 'Se agregó un nuevo cliente'
        });
    } catch (error) {
        console.log("error on createEntrega", error);
    }
}

// R

exports.read = async (req, res) => {
    try {
        const data = await Entregas.find({});
        res.json(data);
    } catch (error) {
        console.log("error on Entregas read", error);
    }
}

// U

exports.update = async (req, res) => {
    try {
        await Entregas.findOneAndUpdate(
            { deliveryId: req.params.id },
            req.body,
            { new: true },
            (err, updatedEntrega) =>
                res.json({ updatedEntrega })
        );
    } catch (err) {
        console.log("error on Entrega update", err);
    }
}

// D

exports.delete = async (req, res) => {
    try {
        await Entregas.remove({ deliveryId: req.params.id })
        res.json({ mesaje: `Deleted ${req.params.id}` })
    } catch{
        console.log("error on Entrega delete", err);

    }

}
