import { Router } from 'express'
const router = Router()
import * as destinationsCtrl from '../controllers/destinations.js'

export {
	router
}

/* Destinations */
//localhost:3000/destinations/new
router.get('/new', destinationsCtrl.new)

//localhost:3000/flights/flightId/destinations
router.post('/', destinationsCtrl.create)