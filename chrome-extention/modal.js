 $.getScript("https://code.jquery.com/ui/1.11.4/jquery-ui.js",function( data, textStatus, jqxhr ) {
   init();
 });
 
 function init(){
     addModal();
 }
 
 function addModal() {
         $("body").prepend("<div id='dialog' title='Fyll på din Artikelpott'>"+
           "<div class='alternative'>Titta på video</div>"+
           "<div class='alternative'>Swisha </div>"+
           "<div class='alternative'>Tipsa en vän </div>"+
           "<div class='alternative'>Dela en artikel </div>"+
           "</div>");
           
         $( "#dialog" ).dialog({ autoOpen: true, 
            dialogClass: "no-close",
            buttons: [
              {
                text: "OK",
                click: function() {
                  $( this ).dialog( "close" );
                }
              }
            ]
           }); 
           
         $( "#opener" ).click(function() {
           $( "#dialog" ).dialog( "open" );
         });
 }
