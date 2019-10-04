const express = require('express');
const router = express.Router();
// const fetch = require('node-fetch')

const Menu = require('../models/MenuModel')


// const getData = async () => {

//     const response = await fetch('http://desarrollo.me:3000/api/menu/read', { mode: 'cors' })
//     let data = await response.json();

//     console.log(data);
//     return data
// }



router.get('/', (req, res) => res.status(200).render('../views/splash', {
    title: 'Splash'
}))

router.get('/login', (req, res) => res.status(200).render('../views/login', { title: 'Login' }))

router.get('/register', (req, res) => res.status(200).render('../views/register', { title: 'Registrate' }))


router.get('/home', (req, res, next) => Menu.find({}).then(
    (data) => res.render('menu', {
        title: 'Perritos · Menu',
        layout: 'logged',
        data: data
    })
));



router.get('/pedido', (req, res, next) => Menu.find({}).then(
    (data) => res.render('pedido', {
        title: 'Perritos · Pedido',
        layout: 'logged',
        data: data
    })
));


router.get('/entrega', (req, res, next) => Menu.find({}).then(
    (data) => res.render('entrega', {
        title: 'Perritos · Entrega',
        layout: 'logged'
    })
));


module.exports = router;