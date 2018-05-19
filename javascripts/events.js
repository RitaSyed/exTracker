const loadLocations = require('./locations.js');
const loadEx = require('./ex.js');
// const data = require('./data');
jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const searchCards = (e) => {
  const input = $('.input-box').val();
  console.log(input);
  if (e.which === 13) {
    $(`.card:not(:icontains(${input}))`).hide();
    // function () {
    // $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1);
    // });
  };
  if (input === '') {
    console.log($(`.card`).show());
  };
};

const buttonEvents = (e) => {
  const btnLabel = $(e.target).text();
  // $(`.card:not(:icontains(${btnLabel}))`).toggle();
  $('.card').not(`:contains(${btnLabel})`).hide();
  if (btnLabel === 'Show All') {
    $(`.card`).show();
  }
  changeButtonText($(e.target));
};

const changeButtonText = (btnLabel) => {
  console.log('btn', btnLabel);
  btnLabel.text(() => {
    let returnText = '';
    if (btnLabel.text() !== 'Show All') {
      returnText = 'Show All';
      console.log(btnLabel);
    } else {
      const btnName = btnLabel.attr('btnName');
      returnText = btnName;
    }
    return returnText;
  });
};

const viewOneEx = (e) => {
  console.log('one ex clicked');
  $('.ex').not($(e.target).closest('.ex')).hide();
  // $(e.target).closest('.ex').addClass('currentEx');
  const exId = $(e.currentTarget).find('.exName').text();
  filterCurrentExLocatons(exId);
};
// const findOneEx = (id) => {
//   return checkedItem.find(item => item.id === id);
// };
const filterCurrentExLocatons = (exId) => {
  Promise.all([loadLocations(), loadEx(),])
    .then((foodz) => {
      const arrayF = foodF(foodz, exId);
      getMatchingLocations(arrayF, foodz[0]);
      console.log(getMatchingLocations(arrayF, foodz[0]));
    });
};
const foodF = (foodz, exId) => {

  foodz[1].forEach((ex) => {
    console.log('foodz', ex.name);
    console.log('exId', exId);
    if (exId === ex.name) {
      return ex;
    }
  });
};

const getMatchingLocations = (array, locations) => {
  let matchingLocations = [];
  matchingLocations = locations.filter((locale) => {
    return array.includes(locale.locationId);
  });
  return matchingLocations;
};

const bindEvents = () => {
  $('.input-box').on('keyup', searchCards);
  $('.btn-group').on('click', buttonEvents);
  $('.ex').on('click', viewOneEx);
};

module.exports = bindEvents;
