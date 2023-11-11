const express = require('express');
const registerCtrl = require('./register.controller');
const isLoggedIn = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

const router = express.Router();

router.route('/register/:eventId')
    .post(isLoggedIn.isVerified, registerCtrl.createAndSave)
    .get(isLoggedIn.isVerified, checkAdmin.isAdmin, registerCtrl.getByEventId);

router.route('/register/:eventId/:userId')
    .put(isLoggedIn.isVerified, checkAdmin.isAdmin, registerCtrl.update);

router.route('/registrations')
    .get(isLoggedIn.isVerified, registerCtrl.getByUserId);

router.route('/details/:eventId')
    .get(isLoggedIn.isVerified, checkAdmin.isAdmin, registerCtrl.branchDetails);

router.route('/year/:eventId')
    .get(isLoggedIn.isVerified, checkAdmin.isAdmin, registerCtrl.yearDetails);

module.exports = router;