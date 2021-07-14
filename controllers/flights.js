import { Flight } from '../models/flight.js'
export {
  newFlight as new,
  create,
  index
}
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights
        })
    })
}

function create(req, res) {
 
  // Create a flight using mongoose
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    // Redirect back to flight create page (/flights/new)
    res.redirect('/flights')
  })
}
function newFlight(req, res) {
  res.render('flights/new')
}