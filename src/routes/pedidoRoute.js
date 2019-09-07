const express = require('express');

const router = express.Router();

const PedidoController = require('../controllers/PedidoController');

//crud Pedido
router.post('/create', PedidoController.create);
router.get('/read', PedidoController.read);
router.put('/update/:id', PedidoController.update);
router.delete('/delete/:id', PedidoController.delete);


module.exports = router;