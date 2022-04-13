var log = (function () {
  try {
    return console.log;
  } catch (e) {
    return function () {};
  }
})();

//header implementation
