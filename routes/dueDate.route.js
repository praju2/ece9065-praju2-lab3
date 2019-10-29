const express = require('express');
const router = express.Router();


const dueDate_controller = require('../controllers/dueDate.controller');

router.get('/dates', dueDate_controller.dueDate_load);
router.put('/dates', dueDate_controller.dueDate_update);

module.exports = router;