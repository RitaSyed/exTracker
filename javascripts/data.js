const loadLocations = require('./locations.js');
const loadEx = require('./ex.js');
const dom = require('./dom.js');
const bindEvents = require('./events.js');

const whenLocationsLoad = (data) => {
  // loadEx(whenExLoad, errorFunction);
  // const locationsData = data.locations;
  dom.printLocations(data);
};

const whenExLoad = (data) => {
  // const exData = data.ex;
  console.log('whenExloads', data);
  dom.printEx(data);

};

// const errorFunction = () => {
//   console.error('stuff broke');
// };

const initializer = () => {
  loadEx().then((data) => {
    console.log(data);
    whenExLoad(data);
  });
  loadLocations().then((data) => {
    whenLocationsLoad(data);
  });
  bindEvents();
  // loadLocations(whenLocationsLoad, errorFunction);
};

module.exports = initializer;
