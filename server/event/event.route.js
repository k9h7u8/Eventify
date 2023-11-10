const express = require('express');
const eventCtrl = require('./event.controller');
const isLoggedIn = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

const router = express.Router();

router.route('/event')
    .post(isLoggedIn.isVerified, checkAdmin.isAdmin, eventCtrl.createAndSave)
    //home page
    .get(eventCtrl.getAll);

router.route('/event/:eventId')
    .get(isLoggedIn.isVerified, isLoggedIn.isVerified, eventCtrl.getByEventId)
    .put(isLoggedIn.isVerified, isLoggedIn.isVerified, eventCtrl.update)
    .delete(isLoggedIn.isVerified, isLoggedIn.isVerified, eventCtrl.deleteEvent);

router.route('/events')
    .get(isLoggedIn.isVerified, isLoggedIn.isVerified, eventCtrl.getByAdminId);

module.exports = router;