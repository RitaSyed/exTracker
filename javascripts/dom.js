const printToDom = (domString, divId) => {
  $(divId).html(domString);
};
const printEx = (exArray) => {
  let domString = '';
  // domString +=  `<div class="col-sm-6 col-md-4">`;
  domString +=    `<div class="thumbnail">`;
  domString +=      `<img src="${exArray.image}" alt="...">`;
  domString +=      `<div class="caption">`;
  domString +=        `<h3>name: ${exArray.name}</h3>`;
  domString +=        `<h3>age: ${exArray.age}</h3>`;
  $(exArray.flaws).each((i, flaw) => {
    domString +=        `<p>${flaw}</p>`;
  });
  domString +=      `</div>`;
  domString +=    `</div>`;
  domString +=  `</div>`;
  domString += `</div>`;
  printToDom(domString, '#ex-card');
};

const printLocations = (locationsArray) => {
  console.log('locations');
  let domString = '';
  $(locationsArray).each((i, locationCard) => {
    domString +=  `<div class="col-sm-6 col-md-4">`;
    domString +=    `<div class="thumbnail">`;

    domString +=      `<img src="${locationCard.locationImg}" alt="...">`;
    domString +=      `<div class="caption">`;
    domString +=        `<h3>where: ${locationCard.name}</h3>`;
    domString +=        `<h3>when: ${locationCard.time}</h32>`;
    $(locationCard.locationAddress).each((i, locale) => {
      domString +=        `<h3>No go: </h3><div>${locale}</div>`;
    });
    domString +=      `</div>`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString += `</div>`;
  });
  printToDom(domString, '#locations-card');
};

module.exports = {
  printEx,
  printLocations,
};
