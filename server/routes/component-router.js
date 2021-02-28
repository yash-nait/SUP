const express = require("express");

const ComponentCtrl = require("../controllers/component-ctrl");

const router = express.Router();

router.post('/component', ComponentCtrl.createComponent);
router.delete('/component/:id', ComponentCtrl.deleteComponent);
router.get('/components', ComponentCtrl.getComponent);

module.exports = router;