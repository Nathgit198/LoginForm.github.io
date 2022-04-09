/* Mostrar / esconder senha */
function togglePassword() {
  let myPassword = document.getElementById("passwordUser");
  if (myPassword.type == "password") {
    myPassword.type = "text";
  } else {
    myPassword.type = "password";
  }
}