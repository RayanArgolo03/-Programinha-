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
