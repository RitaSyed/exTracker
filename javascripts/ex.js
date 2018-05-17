const loadEx = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/ex.json')
      .done((data) => {
        resolve(data.ex);
        console.log('data.ex', data.ex);
      })
      .fail((err) => {
        reject(`got an error!`, err);
      });
  });
};
// const loadEx = (successFunction2, errorFunction) => {
//   $.get('/db/ex.json')
//     .done(successFunction2)
//     .fail(errorFunction);
// };

module.exports = loadEx;
