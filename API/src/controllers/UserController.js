const express = require('express')
const app = express()
const Users = require('../models/UserModel')


exports.login = async (req, res) => {

    const { email, password } = req.body
    try {
        const targetUser = await Users.findOne({ email: email })

        if (password == targetUser.password) {
            app.set('currentUser', {
                logged: true,
                email: targetUser.email
            })
            res.send(`welcome back! ${targetUser.nombre}`)
            console.log(app.get('currentUser'));

        } else {
            res.send(`err. password doesn't match with ${targetUser.email}`)
        }
    } catch (err) {
        console.error("err on login", err);
    }
}


exports.logout = async = (req, res) => {
    try {
        app.set('currentUser', {
            logged: false,
            email: "not logged"
        })
        res.send("logged out successfully")
        console.log(app.get('currentUser'));

    } catch (err) {
        console.error("err on logout", err)
    }
}


// C

exports.create = async (req, res) => {
    const newUser = Users(req.body)
    try {
        await newUser.save();
        res.status(200)
        res.json({
            status: 200,
            msj: 'Se agregó un nuevo cliente'
        });
    } catch (error) {
        console.log("error on createUser", error);
    }
}

// R

exports.read = async (req, res) => {
    try {
        const data = await Users.find({});
        res.json(data);
    } catch (error) {
        console.log("error on Users read", error);
    }
}

// U

exports.update = async (req, res) => {
    try {
        await Users.findOneAndUpdate(
            { email: req.params.id },
            req.body,
            { new: true },
            (err, updatedUser) =>
                res.json({ updatedUser })
        );
    } catch (err) {
        console.log("error on User update", err);
    }
}

// D

exports.delete = async (req, res) => {
    try {
        await Users.remove({ email: req.params.id })
        res.json({ mesaje: `Deleted ${req.params.id}` })
    } catch{
        console.log("error on User delete", err);

    }

}
