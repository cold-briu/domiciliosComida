const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).render('/splash'))

router.get('/login', (req, res) => res.status(200).render('/login'))

router.get('/home', (req, res) => res.render('menu', { layout: 'logged' }));


module.exports = router;