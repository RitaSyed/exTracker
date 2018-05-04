const printToDom = (domString, divId) => {
  $(divId).html(domString);
};
const printEx = (exArray) => {
  let domString = '';
  domString +=  `<div class="col-sm-6 col-md-4">`;
  domString +=    `<div class="thumbnail">`;
  domString +=      `<img src="${exArray.image}" alt="...">`;
  domString +=      `<div class="caption">`;
  domString +=        `<h3>${exArray.name}</h3>`;
  $(exArray.flaws).each((i, flaw) => {
    domString +=        `<p>${flaw}</p>`;
  });
  domString +=      `</div>`;
  domString +=    `</div>`;
  domString +=  `</div>`;
  domString += `</div>`;
  printToDom(domString, '#ex-card');
};

const printLocations = () => {
  console.log('locations');
};

module.exports = {
  printEx,
  printLocations,
};
