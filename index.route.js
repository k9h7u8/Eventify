const express = require('express');
const userRoutes = require('./server/user/user.route');
const authRoutes = require('./server/auth/auth.route');
const eventRoute = require('./server/event/event.route');
const adminRoute = require('./server/user-admin/user-admin.route');
const userFeedback = require('./server/feedback/feedback.routes')
const eventRegisterRoute = require('./server/eventRegister/register.route')

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
// router.use('/users', userRoutes);
router.use('/users', userFeedback);

// mount auth routes at /auth
router.use('/auth', authRoutes);

router.use('/user', eventRoute);

router.use('/event', eventRegisterRoute);

router.use('/admin', adminRoute);

module.exports = router;
