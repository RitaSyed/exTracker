const loadEx = (successFunction2, errorFunction) => {
  $.get('/db/ex.json')
    .done(successFunction2)
    .fail(errorFunction);
};

module.exports = loadEx;
