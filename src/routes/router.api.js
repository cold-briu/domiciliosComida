const express = require('express');
const router = express.Router();

router.use('/users', require('./api/user.route'))

router.use('/pedidos', require('./api/pedido.route'))

router.use('/entregas', require('./api/entrega.route'))

router.use('/menu', require('./api/menu.route'))

module.exports = router;