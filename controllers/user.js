'use strict';

const db = require("../models");
const userModel = db.userModel;

module.exports = {
    authenticateUserLogIn: authenticateUserLogIn,
};


function authenticateUserLogIn(req, res) {
    userModel.findAll().then(function (data) {
        console.log(data);
        res.status( 200 ).json( data )
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

