console.log('ui');

function appendCounterToHead() {
  var site = $('#site');
  var wrapper = $('<div id="artikelPott"></div>');
  var counterIncrement = $('<div id="artikelPottCounter">' +
                  '<span id="artikelPottCounterPrefix">Du har</span>' +
                  '<span id="artikelPottCounterIncrement"><span>' + counter.get() + '</span></span>' +
                  '<span id="artikelPottCounterSufix">gratisartiklar kvar att läsa</span>' +
                '</div>');
  var button = $('<button id="artikelPottButton">Fyll på din pott</button>');

  wrapper.append(counterIncrement)
  wrapper.append(button);
  site.before(wrapper);
  $("#artikelPottButton").click(function() {
           $( "#dialog" ).dialog( "open" );
   });
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
