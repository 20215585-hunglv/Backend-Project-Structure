const express = require('express');
const { getStarted, getVbee, postcreateuser, getCreateUserPage } = require('../controllers/userController');
const router = express.Router();

router.get('/', getStarted);
router.get('/vbee', getVbee);
router.post('/create-user', postcreateuser);
router.get('/create-user-page', getCreateUserPage);

module.exports = router;