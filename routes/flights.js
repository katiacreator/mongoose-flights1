import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

export {
	router
}


// GET /flights/ all flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// GET /flights/:id
router.get('/:id', flightsCtrl.show);
// POST /flights
router.post('/', flightsCtrl.create);
// POST /flights
router.post('/:id/tickets', flightsCtrl.createTicket);
// DELETE /flights
router.delete('/:id', flightsCtrl.delete);
// DELETE /tickets
router.delete('/:flightId/tickets/:ticketId', flightsCtrl.deleteTicket);