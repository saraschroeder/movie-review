const router = require('express').Router();

const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const homeRoutes = require('../homeRoutes');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/home', homeRoutes);

module.exports = router;
