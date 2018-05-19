const loadLocations = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/locations.json')
      .done((data) => {
        resolve(data.locations);
      })
      .fail((err) => {
        reject(`got an error!`, err);
      });
  });
};
// const loadLocations = (successFunction1, errorFunction) => {
//   $.get('/db/locations.json')
//     .done(successFunction1)
//     .fail(errorFunction);
// };

module.exports = loadLocations;
