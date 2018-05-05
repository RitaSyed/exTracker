
const searchCards = (e) => {
  const input = $('.input-box').val();
  console.log(input);
  if (e.which === 13) {
    console.log($(`.thumbnail:not(:contains(${input}))`).hide());
    // function () {
    // $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1);
    // });
  };
  if (input === '') {
    console.log($(`.thumbnail`).show());
  };
};

const bindEvents = () => {
  $('.input-box').on('keyup', searchCards);
};

module.exports = bindEvents;
