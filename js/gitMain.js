var log = (function () {
  try {
    return console.log;
  } catch (e) {
    return function () {};
  }
})();

window.log = log;
/**
 * Main mounting point in global scope
 */
window.sasync = {
  loaded: {},
};

//Error hadnling with body loading
(function () {
  let found;
  try {
    found = Boolean(document.body);
  } catch (e) {}

  if (!found) {
    document.write(
      `<h1 style="color: red; position: fixed; top: 30%; background-color: white;">Can't find document.body - it probably means that /github.js is loaded in &lt;head> instead at the end of &lt;body></h1>`
    );
  }
})();

//header implementation
var header = document.querySelector("header");
header.innerHTML = '<a href="/index.html">dirname.github.io</a>';
//github-link implementation
var githubProfile = document.querySelector("github-profile");
githubLink.innerHTML = "";
