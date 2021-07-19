import { Flight } from '../models/flight.js'
export {
  newFlight as new,
  create,
  index, 
  show,
}

/* function show(req, res) {
  Movie.findById(req.params.id)
  .populate('cast').exec(function(err, movie) {
    Performer.find({_id: {$nin: movie.cast}}, function(err, performers) {
      res.render('movies/show', {
        title: 'Movie Detail', 
        movie: movie,
        performers: performers
      })
    })
  })
} */

function show(req, res){
  // to render the details for a specific flight to the page
  Flight.findById(req.params.id, function(err, flight){
    res.render('flights/show', {
      title: 'Flight Details', 
      flight: flight
    })
  })
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
          err: err,
          flights,
          title: "Flights",
        })
    })
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    // Redirect back to flight create page (/flights/new)
    res.redirect('/flights')
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight"
  })
}