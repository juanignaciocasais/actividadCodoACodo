function validateForm() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  let arroba = user.indexOf("@");

  if (user.length == 0) {
    alert("Ingrese el Usuario");
  } else if (arroba < 0) {
    alert("Falta el arroba en el usuario");
  } else if (password.length == 0) {
    alert("Ingrese la contraseña");
  }
}
