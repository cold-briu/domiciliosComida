const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).render('pages/splash'))

router.get('/login', (req, res) => res.status(200).render('partials/login'))

module.exports = router;