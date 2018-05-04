const loadLocations = (successFunction1, errorFunction) => {
  $.get('/db/locations.json')
    .done(successFunction1)
    .fail(errorFunction);
};

module.exports = loadLocations;
