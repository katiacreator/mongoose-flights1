import { Destination } from "../models/destination.js";
import { Flight } from "../models/flight.js";
export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  createTicket,
  deleteTicket,
  addDestination,
  deleteDestination
};

/* function show(req, res) {
  Flight.findById(req.params.id)
  .populate('cast').exec(function(err, flight) {
    Destination.find({_id: {$nin: flight.destination}}, function(err, destinations) {
      res.render('flights/show', {
        title: 'flight Detail', 
        flight: flight,
        destinations: destinations
      })
    })
  })
} */
function deleteDestination(req, res) {
  Flight.findById(req.params.flightId).then((flight) => {
    flight.destinations.remove({ _id: req.params.destinationId });
    flight
      .save()
      .then(() => {
        res.redirect(`/flights/${flight._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function addDestination(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    flight.destinations.push(req.body.destinationId);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function deleteTicket(req, res) {
  Flight.findById(req.params.flightId).then((flight) => {
    flight.tickets.remove({ _id: req.params.ticketId });
    flight
      .save()
      .then(() => {
        res.redirect(`/flights/${flight._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function createTicket(req, res) {
  //find the flight
  Flight.findById(req.params.id, function (err, flight) {
    //push ticket into [tickets]
    console.log(flight.tickets);
    flight.tickets.push(req.body);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function (err, flight) {
    res.redirect("/flights");
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

function show(req, res) {
    // to render the details for a specific flight to the page
    Flight.findById(req.params.id)
          .populate("destinations")
          .then(flight=> {
            Destination.find({_id: {$nin: flight.destinations}})
            .then(destinations=>{
              res.render('flights/show', { 
                title: 'Flight Detail', 
                flight,
                destinations,
              })
            })
          })
          .catch(err => {
            console.log(err)
            res.redirect("/")
          })
  
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
