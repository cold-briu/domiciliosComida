const express = require('express');

const router = express.Router();

const EntregaController = require('../controllers/EntregaController');

//crud Entrega
router.post('/create', EntregaController.create);
router.get('/read', EntregaController.read);
router.put('/update/:id', EntregaController.update);
router.delete('/delete/:id', EntregaController.delete);

router.get('/complete/:id', EntregaController.complete);


module.exports = router;