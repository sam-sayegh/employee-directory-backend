'use strict';

const db = require("../models");
const md5 = require("md5");
const userModel = db.userModel;

module.exports = {
    authenticateUserLogIn: authenticateUserLogIn,
    authenticateToken: authenticateToken
};


function authenticateUserLogIn(req, res) {
    let email = req.body.email;
    let password = md5(req.body.password);
    userModel.findOne({
        where: {
            email: email,
            password: password
        }
    }).then(function (user) {
        if (user) {
            let authentication_key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            user.update({ authentication_key: authentication_key });
            res.status(200).json(
                {
                    'status': 'success',
                    'api_key': authentication_key
                }
            );
        }
        else {
            res.status(200).json(
                {
                    'status': 'fail',
                }
            );
        }
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

function authenticateToken(req, res, next) {
    let authentication_key = req.header('Authorization') || 'None';
    authentication_key = authentication_key.split("Bearer ");
    userModel.findOne({
        where: {
            authentication_key: authentication_key,
        }
    }).then(function (user) {
        if (!user) {
            throw res.send(401);
        }
        else {
            next();
        }
    }).catch(function (err) {
        res.status(500).send(err.stack);
    });
}

