let imagemTroca = document.querySelector("#imagemTroca");
let botoesSome = document.querySelector(".botoes");
let navBar = document.querySelector(".nav1");

function abrir() {
    if (itens.style.display == "flex") {
        itens.style.display = "none";
        imagemTroca.setAttribute("src", "../img/menu.png");
        botoesSome.style.display = "flex";
        navBar.style.borderBottom = "none";
    } else {
        itens.style.display = "flex";
        imagemTroca.setAttribute("src", "../img/menu-x.png");
        botoesSome.style.display = "none";
        navBar.style.borderBottom = "dashed 3px white";
    }
}
function mudarTamanho() {
    if (window.innerWidth >= 378) {
        itens.style.display = "flex";
    }
}

let linhaBranca = document.querySelector(".linha-branca");
setInterval(aumentaLinha, 250);
function aumentaLinha() {
    if (scrollY >= 315) {
        linhaBranca.style.width = "290px";
        if (scrollY >= 315 && window.innerWidth <= 920) {
            linhaBranca.style.width = "210px";
        }
    } else {
        linhaBranca.style.width = "50px";
    }
}

let linhaBrancaBeneficios = document.querySelector(".linha-branca-beneficios");
setInterval(aumentaLinha2, 250);
function aumentaLinha2(){
  if (scrollY >= 1190) {
    linhaBrancaBeneficios.style.width = "370px";
    if (scrollY >= 315 && window.innerWidth <= 920) {
      linhaBrancaBeneficios.style.width = "263px";
    }
  } else {
    linhaBrancaBeneficios.style.width = "50px";
  }
}

