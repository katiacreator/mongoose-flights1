import { Destination } from "../models/destination.js";

export { newDestination as new, create };

function create(req,res){
    Destination.create(req.body)
      .then((destination) => {
        res.redirect('/destinations/new')
      })
      .catch(err => {
        console.log(err)
        res.redirect("/")
    })
}

/* function createDestination(req, res) {
  // Find the Flight
  Flight.findById(req.params.id, function(err, flight) {
    // Push new Destination into [Destinations]
    flight.destinations.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
} */


function newDestination(req, res) {
  Destination.find({})
    .then((destinations) => {
      res.render("destinations/new", {
        title: "Add A Destination to Flight",
        destinations
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/")
    });
}



