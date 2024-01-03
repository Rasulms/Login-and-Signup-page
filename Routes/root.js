const express = require('express')
const router = express.Router()
const path = require('path');
const userController = require('../controllers/userController')



router.get('/login(.html)?', userController.getUserLogin)
// router.get('/getloginUserData', userController.getUserLogin)
router.post('/login(.html)?', userController.postUserLogin)

router.get('^/$|signup(.html)?', userController.getUserSignUp)
router.post('^/$|signup(.html)?', userController.postUserSignup)

module.exports = router;