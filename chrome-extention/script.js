function appendCounterToHead() {
  var site = $('#site');
  var wrapper = $('<div id="artikelPott"></div>');
  var counter = $('<div id="artikelPottCounter">' +
                  '<span id="artikelPottCounterIncrement">x</span>' +
                  '<span id="artikelPottCounterDivider">/</span>' +
                  '<span id="artikelPottCounterLimit">x</span>' +
                '</div>');
  var button = $('<button id="artikelPottButton">Fyll på!</button>');

  wrapper.append(counter)
  wrapper.append(button);
  site.before(wrapper);
  $("#artikelPottButton").click(function() {
           $( "#dialog" ).dialog( "open" );
   });
};

appendCounterToHead();
