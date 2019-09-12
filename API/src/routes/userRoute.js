const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

//crud user
router.post('/register', UserController.create);
router.get('/read', UserController.read);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);

router.post('/login', UserController.login)
router.get('/logout', UserController.logout)



module.exports = router;