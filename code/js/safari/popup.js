/* global document, safari */
var button = document.getElementById('refresh-button');
button.addEventListener('click', function() {
  var newTab = safari.application.activeBrowserWindow.openTab();
  newTab.url = 'https://github.algolia.com/signin';
  newTab.addEventListener('close', function() {
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('reload-private');
  });
  safari.self.hide();
  return false;
});

var links = ['github-repository', 'github-issues', 'algolia-link'];
var gotoLink = function(link) {
  var newTab = safari.application.activeBrowserWindow.openTab();
  newTab.url = link.getAttribute('href');
  safari.self.hide();
};

for (var i = 0; i < links.length; ++i) {
  var link = document.getElementById(links[i]);
  link.addEventListener('click', gotoLink.bind(null, link));
}
