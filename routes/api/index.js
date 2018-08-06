const router = require("express").Router();
const articlesRoutes = require("./articles");
const nytimesRoutes = require('./apiRoutes')
router.use("/articles", articlesRoutes);
router.use('/api', nytimesRoutes);

module.exports = router;
