const express = require('express');
const router = express.Router();
const { userReg, getAllUser, loggedInUser } = require('../controllers/usercontrollers');

router.route('/store').post(userReg);
router.route('/users').get(getAllUser);
router.route('/login').post(loggedInUser);

module.exports = router;