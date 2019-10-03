const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

const getData = async () => {

    const response = await fetch('http://desarrollo.me:3000/api/menu/read', { mode: 'cors' })
    let data = await response.json();

    console.log(data);
    return data
}



router.get('/', (req, res) => res.status(200).render('../views/splash'))

router.get('/login', (req, res) => res.status(200).render('../views/login'))

router.get('/home', (req, res) => res.render('menu', {
    layout: 'logged',
    data: getData()
}));


module.exports = router;