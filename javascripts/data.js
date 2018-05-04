const loadLocations = require('./locations.js');
const loadEx = require('./ex.js');

const whenLocationsLoad = (data) => {
  console.log('locationData', data);
  loadEx(whenExLoad, errorFunction);
};

const whenExLoad = (data) => {
  console.log('exload', data);
};

const errorFunction = () => {
  console.error('stuff broke');
};

const initializer = () => {
  loadLocations(whenLocationsLoad, errorFunction);
};

module.exports = initializer;
