(function () {
  var el = document.getElementById("versao");
  if (!el) return;
  var strong = el.querySelector("strong");
  if (strong) {
    strong.setAttribute("title", "Definido na branch principal após merge.");
  }
})();
