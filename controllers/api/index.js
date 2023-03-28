const router = require('express').Router();

const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const homeRoutes = require('../homeRoutes');
// const reviewsRoutes = require('../reviewsRoutes');
// const aboutRoutes = require('../aboutRoutes');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/home', homeRoutes);
// router.use('/reviews', reviewsRoutes);
// router.use('/about', aboutRoutes);

module.exports = router;
