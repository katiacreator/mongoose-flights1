import { Flight } from "../models/flight.js";
export { newFlight as new, create, index, show, deleteFlight as delete, createTicket };

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

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id, function(err, flight) {
    res.redirect('/flights')
  })
}
function createTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    flight.tickets.push(req.body);
    flight.save(function (err) {
      res.redirect('/flights/${flight._id}');
    });
  });
}


function show(req, res) {
  // to render the details for a specific flight to the page
  Flight.findById(req.params.id, function (err, flight) {
    res.render("flights/show", {
      title: "Flight Details",
      flight: flight,
    });
  });
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", {
      err: err,
      flights,
      title: "Flights",
    });
  });
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.redirect("/flights/new");
    // Redirect back to flight create page (/flights/new)
    res.redirect("/flights");
  });
}

function newFlight(req, res) {
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // Obtains the min value date

  // Format the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16);
  res.render("flights/new", {
    title: "Add Flight",
    departsDate,
  });
}
