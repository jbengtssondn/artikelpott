function loadCss(url) {
  var head = document.getElementsByTagName('head')[0],
  link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  head.appendChild(link);
};

function loadScript(url) {
  var s = document.createElement('script');
  s.src = url;
  (document.head||document.documentElement).appendChild(s);
  s.onload = function() {
      s.parentNode.removeChild(s);
  };
};

loadCss(chrome.extension.getURL('artikelpott.css'));
loadScript(chrome.extension.getURL('modal.js'));
loadScript(chrome.extension.getURL('script.js'));
