const express = require('express')


const { signupUser, loginUser } = require('../controllers/userController')
const {createReservation} = require('../controllers/reserveController')
const {isAvailable} = require('../controllers/availabilityController')

const router = express.Router()

router.post('/login', loginUser)
router.post('/signup', signupUser)

router.post('/reserve', createReservation)
router.post('/availability', isAvailable)

module.exports = router
