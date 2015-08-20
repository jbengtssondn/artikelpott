var Loader = function () { }
Loader.prototype = {
    require: function (scripts, callback) {
        this.loadCount      = 0;
        this.totalRequired  = scripts.length;
        this.callback       = callback;

        for (var i = 0; i < scripts.length; i++) {
            this.writeScript(scripts[i]);
        }
    },
    loaded: function (evt) {
        this.loadCount++;

        if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
    },
    writeScript: function (src) {
        var self = this;
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.src = src;
        s.addEventListener('load', function (e) { self.loaded(e); }, false);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
};

function loadCss(url) {
  var head = document.getElementsByTagName('head')[0];
  link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  head.appendChild(link);
};

function loadScript(url, callback) {
  var s = document.createElement('script');
  s.src = url;
  (document.head||document.documentElement).appendChild(s);
  s.onload = function() {
      //s.parentNode.removeChild(s);
  };
};

function addHtmlUrl(url,id) {
  var head = document.getElementsByTagName('body')[0];
  var s = document.createElement('div');
  s.setAttribute("id", id);
  var node = document.createTextNode(url)
  s.appendChild(node);
  head.appendChild(s);
};

var l = new Loader();
l.require([
    chrome.extension.getURL('snabbt.js'),
    chrome.extension.getURL('storage.js'),
    chrome.extension.getURL('modal.js'),
    chrome.extension.getURL('ui.js'),
    chrome.extension.getURL('app.js'),
    chrome.extension.getURL('share.js')],
    function() {});

loadCss(chrome.extension.getURL('artikelpott.css'));
addHtmlUrl(chrome.extension.getURL('modal.html'),"modalUrl");
