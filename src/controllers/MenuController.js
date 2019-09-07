const Menu = require('../models/MenuModel')
const Pedidos = require('../models/PedidoModel')



exports.addToCart = async (req, res) => {
    try {
        const currentItem = await Menu.findOne({ itemId: req.params.itemId })
        if (currentItem.stock > 0) {
            currentItem.stock--
            await currentItem.save()
            const currentOrder = await Pedidos.findOne({ orderId: req.params.orderId })
            currentOrder.cart.push({ itemId: req.params.itemId })
            await currentOrder.save()
            res.send(`recibido!:
             ${currentOrder}`)


        } else {
            res.send(`err no quedan existencias de: ${currentItem.productName}`)
        }
    } catch{
        console.log("error on menuItem addtocart", err);
    }
}


exports.addMany = async (req, res) => {
    const arrInput = req.body
    const itemsArr = arrInput.map(entry => Menu(entry))

    try {
        await itemsArr.map(entry => entry.save())
        res.send('Se agregaron cosas');
    } catch (error) {
        console.log("error on createmenuItem", error);
    }
}



// C

exports.create = async (req, res) => {
    const newmenuItem = Menu(req.body)
    try {
        await newmenuItem.save();
        res.status(200)
        res.json({
            status: 200,
            msj: 'Se agregó un nuevo cliente'
        });
    } catch (error) {
        console.log("error on createmenuItem", error);
    }
}

// R

exports.read = async (req, res) => {
    try {
        const data = await Menu.find({});
        res.json(data);
    } catch (error) {
        console.log("error on Menu read", error);
    }
}

// U

exports.update = async (req, res) => {
    try {
        await Menu.findOneAndUpdate(
            { itemId: req.params.id },
            req.body,
            { new: true },
            (err, updatedmenuItem) =>
                res.json({ updatedmenuItem })
        );
    } catch (err) {
        console.log("error on menuItem update", err);
    }
}

// D

exports.delete = async (req, res) => {
    try {
        await Menu.remove({ itemId: req.params.id })
        res.json({ mesaje: `Deleted ${req.params.id}` })
    } catch{
        console.log("error on menuItem delete", err);
    }

}
