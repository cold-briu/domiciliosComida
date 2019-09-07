const express = require('express');
const router = express.Router();

const MenuController = require('../controllers/MenuController');

//crud Menu
router.post('/create', MenuController.create);
router.get('/read', MenuController.read);
router.put('/update/:id', MenuController.update);
router.delete('/delete/:id', MenuController.delete);

router.get('/add/:itemId/:orderId', MenuController.addToCart);





module.exports = router;