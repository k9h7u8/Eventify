const express = require('express');
const feedbackCtrl = require('./feedback.controller');

const router = express.Router();

router.route('/feedback')
    .post(feedbackCtrl.createAndSave);

module.exports = router;