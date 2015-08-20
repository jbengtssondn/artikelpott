function appendCounterToHead() {
  var site = $('#site');
  var wrapper = $('<div id="artikelPott"></div>');
  var counter = $('<div id="artikelPottCounter">' +
                  '<span id="artikelPottCounterPrefix">Du har</span>' +
                  '<span id="artikelPottCounterIncrement"><span>20</span></span>' +
                  '<span id="artikelPottCounterSufix">gratisartiklar kvar att läsa</span>' +
                '</div>');
  var button = $('<button id="artikelPottButton">Fyll på din pott</button>');

  wrapper.append(counter)
  wrapper.append(button);
  site.before(wrapper);
};


function updatePottCounter(total) {
  var container = $('#artikelPottCounterIncrement span');

  snabbt(container, {
    fromPosition: [0, -40, 0],
    position: [0, 0, 0],
    easing: 'spring',
    springMass: 5
  });

  container.text(total);
};

appendCounterToHead();
