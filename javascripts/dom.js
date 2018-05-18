const printToDom = (domString, divId) => {
  $(divId).html(domString);
};
const printEx = (exsArray) => {
  let domString = '';
  $(exsArray).each((i, ex) => {
    domString +=    `<div class="thumbnail">`;
    domString +=      `<img src="${ex.image}" alt="...">`;
    domString +=      `<div class="caption">`;
    domString +=        `<h3>name: ${ex.name}</h3>`;
    domString +=        `<h3>age: ${ex.age}</h3>`;
    $(ex.flaws).each((i, flaw) => {
      domString +=        `<p>${flaw}</p>`;
    });
    domString +=      `</div>`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString += `</div>`;
  });
  printToDom(domString, '#ex-card');
};

const printLocations = (locationsArray) => {
  console.log('locations');
  let domString = '';
  $(locationsArray).each((i, locationCard) => {
    domString +=  `<div class="card col-sm-6 col-md-4">`;
    domString +=    `<div class="thumbnail">`;
    domString +=      `<img src="${locationCard.locationImg}" alt="...">`;
    domString +=      `<div class="caption">`;
    domString +=        `<h3 class="search text-center">${locationCard.name}</h3>`;
    domString +=        `<h34>when: ${locationCard.time}</h4>`;
    $(locationCard.locationAddress).each((i, locale) => {
      domString +=        `<h4 class="search"></h4><div>${locale}</div>`;
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
