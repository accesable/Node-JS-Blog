const express = require('express');

//Built-in router module in express
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.use('/about',siteController.about)
router.use('/',siteController.index)

module.exports = router;

