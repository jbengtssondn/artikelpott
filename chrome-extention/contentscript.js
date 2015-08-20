function loadCss(url) {
  var head = document.getElementsByTagName('head')[0];
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
function addHtmlUrl(url,id) {
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('div');
  s.setAttribute("id", id);
  var node = document.createTextNode(url)
  s.appendChild(node);
  head.appendChild(s);
};

loadCss(chrome.extension.getURL('artikelpott.css'));
loadScript(chrome.extension.getURL('modal.js'));
loadScript(chrome.extension.getURL('script.js'));
addHtmlUrl(chrome.extension.getURL('modal.html'),"modalUrl");
