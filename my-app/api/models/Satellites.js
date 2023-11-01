const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const xlsx = require('xlsx');

const SatellitesSchema = new Schema({
    OrbitClass:String,
    country:String,
    apogee:Number,
    contracor:String,
    COSPAR:String,
    CountryContracor:String,
    UNRegistery:String,
    DryMass:Number,
    Eccentricity:Number,
    LifeTime:Number,
    LaunchMass:Number,
    LaunchSite:String,
    LaunchVehicle:String,
    NORAD:Number,
    OfficialName:String,
    Owner:String,
    Perigee:Number,
    Period:Number,
    Purpose:String,
    Users:String
})

const SatellitesModel = model('SatelliteModel', SatellitesSchema);

const workbook = xlsx.readFile('../data/SatellitesData.xls');
const sheet_name_list = workbook.SheetNames;
const xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);


async function importData() {
    try {
      // Importowanie danych z pliku Excel
      const workbook = xlsx.readFile('./data/SatellitesData.xls');
      const sheet_name_list = workbook.SheetNames;
      const xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
      
      // Zapis danych w bazie danych
      const result = await SatellitesModel.insertMany(xlData);
      console.log('Dane zaimportowane poprawnie:', result);
    } catch (error) {
      console.error('Błąd podczas importowania danych:', error);
    }
  }
  
  // Wywołaj funkcję importującą dane
importData();
  