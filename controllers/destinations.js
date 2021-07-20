import { Destination } from "../models/destination.js";

export { newDestination as new };

/* function createDestination(req, res){
    Destination.create(req.body, function (err, destination){
      res.redirect('destinations/new')
    })
  } */

function newDestination(req, res) {
  Destination.find({})
    .then((destinations) => {
      res.render("destinations/new", {
        title: "Add Destination",
        destinations,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}
