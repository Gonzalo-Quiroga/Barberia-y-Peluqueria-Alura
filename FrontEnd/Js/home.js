(function () {
  setInterval(function () {
    var primeraPalabra = document.getElementById("textoBanner1");
    var segundaPalabra = document.getElementById("textoBanner2");
    var terceraPalabra = document.getElementById("textoBanner3");

    coloresSimples = ["red", "blue", "white"];

    primeraPalabra.style.color =
      coloresSimples[Math.floor(Math.random() * coloresSimples.length)];
    segundaPalabra.style.color =
      coloresSimples[Math.floor(Math.random() * coloresSimples.length)];
    terceraPalabra.style.color =
      coloresSimples[Math.floor(Math.random() * coloresSimples.length)];
  }, 1000);
})();
