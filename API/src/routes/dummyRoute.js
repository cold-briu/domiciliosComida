const express = require('express');
const router = express.Router();
const DummyController = require('../controllers/DummyController');



router.get('/404', (req, res) => { res.send({ status: "404 domicilios" }) })



//crud basic
router.post('/create', DummyController.create);
router.get('/read', DummyController.read);
router.put('/update/:id', DummyController.update);
router.delete('/delete/:id', DummyController.delete);



module.exports = router;