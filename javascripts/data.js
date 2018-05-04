const loadLocations = require('./locations.js');
const loadEx = require('./ex.js');
const dom = require('./dom.js');

const whenLocationsLoad = (data) => {
  loadEx(whenExLoad, errorFunction);
};

const whenExLoad = (data) => {
  console.log('exload', data);
  const exData = data.ex;
  console.log('exData', exData);
  dom.printEx(exData);

};

const errorFunction = () => {
  console.error('stuff broke');
};

const initializer = () => {
  loadLocations(whenLocationsLoad, errorFunction);
};

module.exports = initializer;
