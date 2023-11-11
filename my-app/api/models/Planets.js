const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const PlanetsSchema = new Schema({
    Planet: String,
    Distance: Number,
    OrbitalPeriod: Number,
    RotationPeriod: Number,
    Moons: Number,
})

const Planets = mongoose.model('Planets', PlanetsSchema);
module.exports = Planets