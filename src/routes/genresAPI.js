const router = require("express").Router();
const mongoose = require("mongoose");

const Genre = mongoose.model(
  "Genre",
  new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 50 },
  })
);

router.get("/", async (req, res) => {
  res.send(await Genre.find().sort("name"));
});

router.post("/", async (req, res) => {
  const genre = new Genre({ name: req.body.name });
  res.send(await genre.save());
});

router.delete("/:id", async (req, res) => {
  await Genre.findByIdAndRemove(req.params.id);
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
});

router.put("/:id", async (req, res) => {
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  //Go with update first method
  await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  res.send(genre);
});

router.get("/:id", async (req, res) => {
  const genre = awaitGenre.findById(req.params.id);
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
});

module.exports = router;
