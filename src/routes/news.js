const express = require('express');

//Built-in router module in express
const router = express.Router();

const newsController = require('../app/controllers/NewsController')

router.use('/:slug',newsController.create)
router.use('/',newsController.index)

module.exports = router;

