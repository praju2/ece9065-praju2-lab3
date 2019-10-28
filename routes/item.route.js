const express = require('express');
const router = express.Router();


const item_controller = require('../controllers/item.controller');

router.get('/', item_controller.items);
router.get('/:id', item_controller.item_details);
router.post('/create', item_controller.item_create);
router.put('/update/:id', item_controller.item_update);
router.delete('/delete/:id', item_controller.item_delete);
module.exports = router;