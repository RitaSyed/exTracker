const loadLocations = require('./locations.js');
const loadEx = require('./ex.js');
const dom = require('./dom.js');

const whenLocationsLoad = (data) => {
  loadEx(whenExLoad, errorFunction);
  const locationsData = data.locations;
  dom.printLocations(locationsData);
  console.log('locationsdata', locationsData);
};

const whenExLoad = (data) => {
  const exData = data.ex;
  dom.printEx(exData);
};

const errorFunction = () => {
  console.error('stuff broke');
};

const initializer = () => {
  loadLocations(whenLocationsLoad, errorFunction);
};

module.exports = initializer;
