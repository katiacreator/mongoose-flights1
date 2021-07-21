import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

export {
	router
}

/* Flights */
// GET /flights/ all flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// GET /flights/:id
router.get('/:id', flightsCtrl.show);
// POST /flights
router.post('/', flightsCtrl.create);
// DELETE /flights
router.delete('/:id', flightsCtrl.delete);

/* Tickets */
// POST /flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket);
// DELETE /tickets
router.delete('/:flightId/tickets/:ticketId', flightsCtrl.deleteTicket);

/* Destinations */
router.post('/:id/', flightsCtrl.addDestination)
// router.delete('/:flightId/destinations/:destinationId', flightsCtrl.deleteDestination);
