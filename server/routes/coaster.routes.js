const express = require("express");
const Coaster = require("../models/Coaster.model");
const router = express.Router();

router.get("/", (req, res) => {
  Coaster.find()
    .select('title imageUrl owner')
    .then(coasters => res.status(200).json(coasters))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving coasters", err }))
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Coaster.findById(id)
    .then(coaster => res.status(200).json({ coaster, message: "Coaster getted" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a single coaster", err }))
})

router.post("/", (req, res) => {
  const coaster = req.body;
  console.log(req.session.currentUser._id, "la sesión")

  Coaster.create({ ...coaster, owner: req.session.currentUser._id })
    .then(coaster => res.status(200).json({ coaster, message: "Coaster created" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating coaster", err: err.message }))
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Coaster.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: `Coaster ${id} deleted` }))
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting coaster", err }))
})

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Coaster.findByIdAndUpdate(id, req.body, { new: true })
    .then(coaster => res.status(200).json({ coaster, message: "Coaster edited" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
})



module.exports = router;