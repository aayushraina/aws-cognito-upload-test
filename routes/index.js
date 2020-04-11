var express = require('express');
var router = express.Router();
var authController = require('../AuthController');
router.get('/', authController.user_auth);

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/validate', authController.validate_token);
router.get('/hello', authController.simple_hello);


module.exports = router;
