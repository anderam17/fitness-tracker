const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then((workouts) => {
        res.json(workouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {exercises: body}
        },
        {
            new: true,
            runValidators: true
        }
    ).then((workouts) => {
        res.json(workouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    console.log(req.body);
    Workout.create(req.body)
    .then((workouts) => {
        res.json(workouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
    .then((workouts) => {
        res.json(workouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;

