const express = require('express');
const router = express.Router();
module.exports = router;

const models = require('./models');
const User = models.User;
const Fooddrive = models.Fooddrive;

// Create a new fooddrive
router.post("/fooddrives", (req, res, next)=>{
  console.log("GLADYS req.body.input",req.body.input)
  if (req.body.content === null) {
    res.status(404).message("content cannot be null")
  }
  else {
    Fooddrive.create(req.body.input)
    .then(fooddrive=>res.json(fooddrive))
    .catch(next);
  }
});

// Get an existing fooddrive by id
router.get("/fooddrives/:id", (req, res, next)=>{
  Fooddrive.findById(req.params.id)
  .then(function(fooddrive){
    if (!fooddrive) {
      res.status(404).send("This fooddrive id does not exist");
    }
    else {
      res.json(fooddrive);
    }
  })
  .catch(next);
});

// Add a volunteer to a fooddrive
router.put("/fooddrives/:id", (req, res, next)=>{
  Fooddrive.update(req.body.input,
  {
    where: {id: req.params.id}
  })
  .then(fooddrive=>res.json(fooddrive))
  .catch(next);
});


