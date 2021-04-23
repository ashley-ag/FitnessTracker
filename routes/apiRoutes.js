const db = require("../models/");

module.exports = (app) => {
  app.get("/api/tables", (req, res) => res.json(tableData));

  app.get("/api/workouts", (req, res) => {
    res.json(db.Workout.findAll());
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercise: req.body } },
      { new: true, runValidators: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
