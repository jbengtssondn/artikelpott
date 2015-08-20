// bind events
window.addEventListener("beforeunload", function() {
    urlStorage.setPath(location.pathname);
});


// check if a poot exists
if(localStorage.getItem('artikelpott') === null) {
    localStorage.setItem('artikelpott', 20);
}


function checkUrlPath() {
    var path = location.pathname;
    var lastPath = urlStorage.getPath();

    if(path != lastPath && (/[a-z]\/[a-z]/.test(path))) {
        counter.dec();
    }
};

function appReset() {
    localStorage.setItem('artikelpott', 20);
};

function appInit() {
    appendCounterToHead();
    window.onload = function() {
        setTimeout(function() {
            checkUrlPath();
        }, 1000);
    };
};
appInit();
