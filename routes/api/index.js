// connect to sever and user and thought routes
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// direct page to user and thought routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router; 