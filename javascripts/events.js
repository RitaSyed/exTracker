
jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const searchCards = (e) => {
  const input = $('.input-box').val();
  console.log(input);
  if (e.which === 13) {
    console.log($(`.thumbnail:not(:icontains(${input}))`).hide());
    // console.log($(`.thumbnail:not(:contains.toLowerCase()(${input}))`));
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
