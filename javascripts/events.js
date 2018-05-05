
jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const searchCards = (e) => {
  const input = $('.input-box').val();
  console.log(input);
  if (e.which === 13) {
    $(`.thumbnail:not(:icontains(${input}))`).hide();
    // function () {
    // $(this).toggle($(this).text().toLowerCase().indexOf(input) > -1);
    // });
  };
  if (input === '') {
    console.log($(`.thumbnail`).show());
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

const bindEvents = () => {
  $('.input-box').on('keyup', searchCards);
  $('.btn-group').on('click', buttonEvents);

};

module.exports = bindEvents;
