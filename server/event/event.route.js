const express = require('express');
const eventCtrl = require('./event.controller');
const isLoggedIn = require('../middleware/verifyToken');

const router = express.Router();

router.route('/event')
    .post(isLoggedIn.isVerified, eventCtrl.createAndSave)
    .get(eventCtrl.getAll);

router.route('/event/:eventId')
    .get(eventCtrl.getById)
    .put(isLoggedIn.isVerified, eventCtrl.update)
    .delete(isLoggedIn.isVerified, eventCtrl.deleteEvent);

router.route('/events')
    .get(isLoggedIn.isVerified, eventCtrl.getByAdminId);

module.exports = router;