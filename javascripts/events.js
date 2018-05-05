const searchCards = (e) => {
  console.log(e.which);
  console.log('event');
};

const bindEvents = () => {
  $('.input-box').on('keypress', searchCards);
};

module.exports = bindEvents;
