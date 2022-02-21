// connect to server and routes
const router = require('express').Router();
const apiRoutes = require('./api');

// direct to api routes
router.use('/api', apiRoutes);

// error message
router.use((req, res) => {
    res.status(404).send('<h1>😝404 Error!</h1>');
});

module.exports = router; 