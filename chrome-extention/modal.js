 
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
              $( "#dialog" ).dialog({ autoOpen: true, 
                  maxWidth:600,
                  maxHeight: 500,
                  width: 1000,
                  height: 600,
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
 }

function videoButtonClick() {
    $("#buttonsContainer").hide();
    $("#videContainer").show();
 };