const express = require('express');
const registerCtrl = require('./register.controller');

const router = express.Router();

router.route('/register')
    .post(registerCtrl.createAndSave);

module.exports = router;