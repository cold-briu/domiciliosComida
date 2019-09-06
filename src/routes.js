const express = require('express');
const router = express.Router();
const DummyController = require('./controllers/DummyController');

router.get('/404', (req, res) => { res.send({ status: "404 domicilios" }) })

router.get('/myGet', (req, res) => { res.send({ status: `200 ${"lol"} ` }) })

router.post('/myPost', (req, res) => {
    req.method == 'POST' ?
        res.send({ ...req.body, status: 200 })
        :
        res.send({ status: 500 })
})

router.post('/create', DummyController.create);
router.get('/read', DummyController.read);
router.put('/update/:id', DummyController.update);
router.delete('/delete/:id', DummyController.delete);






module.exports = router;