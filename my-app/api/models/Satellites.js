const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const xlsx = require('xlsx');

const SatellitesSchema = new Schema({
    Class: String,
    Country: String,
    Apogee: Number,
    Contractor: String,
    COSPAR: String,
    UN: String,
    Eccentricity: Number,
    LaunchSite: String,
    LaunchVehicle: String,
    NORAD: Number,
    SatelliteName: String,
    Operator: String,
    Perigee: Number,
    Purpose: String,
    Users: String
})

const Satellite = mongoose.model('Satellite', SatellitesSchema);
module.exports = Satellite

