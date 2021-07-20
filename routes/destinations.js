import { Router } from 'express'
const router = Router()
import * as destinationsCtrl from '../controllers/destinations.js'

export {
	router
}

/* Destinations */
//post the rendered new data
router.get('/new', destinationsCtrl.new)
//form to be able to create
router.post('/', destinationsCtrl.create)