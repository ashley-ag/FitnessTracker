const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    trim: true,
    required: "Date is required",
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "You must choose a workout type",
      },
      name: {
        type: String,
        trim: true,
        required: "Your exercise must have a name",
      },
      duration: {
        type: Number,
        required: "Yor workout must have a duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
