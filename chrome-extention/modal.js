 
  $('<link>', {
            rel: 'stylesheet',
            type: 'text/css',
            href: '//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css'
        }).appendTo('head');
 $.getScript("https://code.jquery.com/ui/1.11.4/jquery-ui.js",function( data, textStatus, jqxhr ) {
   init();
 });

 function init(){
     addModal();
    
 };
 
 function addModal() {
         $("body").prepend("<div id='insert'></div>");
         $("#insert").load($("#modalUrl")[0].innerText,function() {
              $( "#dialog" ).dialog({ autoOpen: false, 
                  maxWidth:600,
                  maxHeight: 500,
                  width: 1000,
                  modal: true,
                  dialogClass: "myModal",
                  open: function() {
                      jQuery('.ui-widget-overlay').bind('click', function() {
                          jQuery('#dialog').dialog('close');
                      })
                  }
                 
               });
               initButtonEvents();
        });
 };
 
 function initButtonEvents() {
    $("#videoButton").click(videoButtonClick);
    // $("#referalButton").click(showAlternativeContainer("#referelContainer"));
    // $("#klarnaButton").click(showAlternativeContainer("#klarnaContainer"));
     $("#shareButton").click(shareButtonClick);
 }
 
 
 function hideAlternatives() {
    $("#buttonsContainer").hide();
 };

//SHARE START
function shareButtonClick() {
    hideAlternatives();
    $("#shareContainer").show();
    
  }

//END SHARE

//START VIDEO FUNCTION

$.getScript("http://csp.screen9.com/js/ultralight.js");
var screen9_ajax_auth = "QHXsCbtEUhagtECcyKU9-9-ipMIr0ryNinYqdjg4J9sKtOmjOstMvA";

function videoEnded() {
    // TODO: increment artikelpott
    console.log("video ended");
};

function videoEmbedded(data) { data.player.bind("finish", videoEnded); }
function videoFailed(reason) { console.log(reason); }

function videoButtonClick() {
    hideAlternatives();
    $("#videoContainer").show();
    var options = {
	"mediaid": "2ZYXjBfcAr3ldYltl_OMoA",
	"containerid": "videoContainer",
	"autoplay": true,
	"controls": false,
    };
    screen9.api.embed(options, videoEmbedded, videoFailed);
 };


//END VIDEO FUNCTION


