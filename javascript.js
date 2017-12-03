/* Quando clica no bot�o, o menu abre ou fecha */
function abreMenu() {
    document.getElementById("meuMenu").classList.toggle("show");
}

// Menu fecha se clicar fora
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content"); //pega elementos que tem a classe dropdown-content, no caso 3.
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
