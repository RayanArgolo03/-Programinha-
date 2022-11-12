
/* validação para o formulario de login */

function validateform() {
  var x = document.myform.Email.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");

  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
    alert("Por favor,digite um Email válido");
    return false;
  }
}
