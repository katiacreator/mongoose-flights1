import { Router } from 'express'
const router = Router()
import * as destinationsCtrl from '../controllers/destinations.js'

export {
	router
}

/* Destinations */
//form to be able to create
router.get('/new', destinationsCtrl.new)
//post the rendered new data
//router.post('/', destinationsCtrl.create)