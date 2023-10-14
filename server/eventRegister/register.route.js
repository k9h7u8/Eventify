const express = require('express');
const registerCtrl = require('./register.controller');

const router = express.Router();

router.route('/register/:eventId')
    .post(registerCtrl.createAndSave)
    .get(registerCtrl.getById);

router.route('/details/:eventId')
    .get(registerCtrl.branchDetails);

router.route('/year/:eventId')
    .get(registerCtrl.yearDetails);

module.exports = router;