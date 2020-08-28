/* eslint-disable object-shorthand */
/* eslint-disable strict */
/* eslint-disable no-use-before-define */

'use strict';

const md5 = require('md5');
const db = require('../models');

const { userModel } = db;

module.exports = {
  authenticateUserLogIn: authenticateUserLogIn,
  authenticateToken: authenticateToken,
};

function authenticateUserLogIn(req, res) {
  const { email } = req.body;
  const password = md5(req.body.password);
  userModel.findOne({
    where: {
      email,
      password,
    },
  }).then((user) => {
    if (user) {
      const authenticationKey = Math.random().toString(36).substring(2, 15)
      + Math.random().toString(36).substring(2, 15);
      user.update({ authentication_key: authenticationKey });
      res.status(200).json(
        {
          status: 'success',
          api_key: authenticationKey,
        },
      );
    } else {
      res.status(200).json(
        {
          status: 'fail',
        },
      );
    }
  }).catch((err) => {
    res.status(500).send(err.stack);
  });
}

function authenticateToken(req, res, next) {
  let authenticationKey = req.header('Authorization') || 'None';
  authenticationKey = authenticationKey.split('Bearer ');
  userModel.findOne({
    where: {
      authentication_key: authenticationKey,
    },
  }).then((user) => {
    if (!user) {
      throw res.send(401);
    } else {
      next();
    }
  }).catch((err) => {
    res.status(500).send(err.stack);
  });
}
