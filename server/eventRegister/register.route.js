const express = require('express');
const registerCtrl = require('./register.controller');

const router = express.Router();

router.route('/register/:eventId')
    .post(registerCtrl.createAndSave)
    .get(registerCtrl.getById);

module.exports = router;