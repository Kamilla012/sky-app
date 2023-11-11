const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const PlanetsSchema = new Schema({
    Planet: String,
    Distance: Number,
    Size: Number,
    OrbitalPeriod: Number,
    RotationPeriod: Number,
    Type: String,
    Moons: Number,
})

const Planets = mongoose.model('Planets', PlanetsSchema);
module.exports = Planets