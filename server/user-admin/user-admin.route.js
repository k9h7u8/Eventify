const express = require('express');
const adminCtrl = require('./user-admin.controller');

const router = express.Router();

router.route('/register')
    .post(adminCtrl.register);

router.route('/login')
    .post(adminCtrl.login);

module.exports = router;