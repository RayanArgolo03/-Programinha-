let imagemTroca = document.querySelector("#imagemTroca")
let botoesSome = document.querySelector(".botoes")
let navBar = document.querySelector(".nav1")

function abrir() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
        imagemTroca.setAttribute("src", "../img/menu.png")
        botoesSome.style.display = 'flex'
        navBar.style.borderBottom = "none"

    } else {
        itens.style.display = 'flex'
        imagemTroca.setAttribute("src", "../img/menu-x.png")
        botoesSome.style.display = 'none'
        navBar.style.borderBottom = "dashed 3px white"
    }
}
function mudarTamanho() {
    if (window.innerWidth >= 378) {
        itens.style.display = 'flex'
    }
}



/* validação para o formulario de login */

function validateform(){  
  // var Email= document.myform.Emailt.value;  
  var password=document.myform.password.value;  
  var x=document.myform.Email.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");  
  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Por favor,digite um Email válido");  
    return false; 
  }else if(password.length<6){  
    alert("Por favor,confira sua Senha");  
    return false;  
    }  
  } 
 