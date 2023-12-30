const express = require('express');
const router = express.Router();
const { userReg } = require('../controllers/usercontrollers');

router.route('/store').post(userReg);

module.exports = router;