var log = (function () {
  try {
    return console.log;
  } catch (e) {
    return function () {};
  }
})();

//header implementation
var header = document.querySelector("header");
header.innerHTML = '<a href="/index.html">dirname.github.io</a>';
