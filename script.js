/* Mostrar / esconder senha */
function togglePassword() {
  let myPassword = document.getElementById("passwordUser");
  if (myPassword.type == "password") {
    myPassword.type = "text";
  } else {
    myPassword.type = "password";
  }
}

/* Dark mode e light mode */
const html = document.querySelector("html");
const checkbox = document.getElementById('checkbox');

const getStyle = (element, style) => 
  window.getComputedStyle(element)
  .getPropertyValue(style);

const lightmode = {
  bg: getStyle(html, "--bg"),
  bgForm: getStyle(html, "--bgForm"),
  colorText: getStyle(html, "--colorText"),
  white: getStyle(html, "--white"),
  boxShadow: getStyle(html, "--box-shadow"),
}

const darkmode = {
  bg: '#121212',
  bgForm: '#1f1f1f',
  colorText: 'white',
  white: '#000',
  boxShadow: 'black'
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener('change', ({target}) => {
  target.checked ? changeColors(darkmode) : changeColors(lightmode)
});
/* Background dark - #121212 */
/* Background form dark - #1f1f1f */