const express = require('express');
const router = express.Router();
//const SchemaValidator = require('../middlewares/SchemaValidator');
const validateRequest = SchemaValidator(true);


const item_controller = require('../controllers/item.controller');

router.get('/', item_controller.items);
router.get('/item/:id', item_controller.item_details);
//router.post('/item',validateRequest, item_controller.item_create);
//router.put('/item', validateRequest,item_controller.item_update);
router.delete('/item', item_controller.item_delete);
module.exports = router;