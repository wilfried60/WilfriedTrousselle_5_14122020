const express = require('express');
const router = express.Router();

const teddyCtrl = require('../controllers/teddy');

router.get('/', teddyCtrl.getAllourson);
router.get('/:id', teddyCtrl.getOneTeddy);
router.post('/order', teddyCtrl.orderourson);

module.exports = router;