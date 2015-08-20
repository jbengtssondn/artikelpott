function counterUpdated(newValue) {
    console.log(newValue);
    // TODO: display newValue
}

console.log('storage');
var counter = {
    inc: function() {
    	newValue = 1 + parseInt(localStorage.getItem('artikelpott') || 0);
    	localStorage.setItem('artikelpott', newValue);
    	counterUpdated(newValue);
    },
    dec: function() {
    	newValue = -1 + parseInt(localStorage.getItem('artikelpott') || 0);
    	localStorage.setItem('artikelpott', newValue);
    	counterUpdated(newValue);
    },
    get: function() { return parseInt(localStorage.getItem('artikelpott') || 0); },
    set: function(value) {
    	localStorage.setItem('artikelpott', value);
    	counterUpdated(newValue);
    }
};

var urlStorage = {
    setPath: function(path) {
        localStorage.setItem('artikelpottLastPath', path);
    },
    getPath: function() {
        return localStorage.getItem('artikelpottLastPath');
    }
};
