let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";
var varNumber;
var arcTrigo;

var result = document.getElementById('result');

window.addEventListener('keydown', (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.key === 'Enter' || e.key === 'NumpadEnter')
    {
      result.value = eval(result.value);
    }
    if (e.key === 'Backspace')
    {
        result.value = result.value.toString().slice(0, -1);
    }
    if (e.key === 'Delete')
    {
        clearScreen();
    }
    if (e.key === '0'
        || e.key === '1'
        || e.key === '2'
        || e.key === '3'
        || e.key === '4'
        || e.key === '5'
        || e.key === '6'
        || e.key === '7'
        || e.key === '8'
        || e.key === '9'
        || e.key === '-'
        || e.key === '+'
        || e.key === '*'
        || e.key === '/')
    {
        liveScreen(e.key);
    }
    if (e.key === ',' || e.key === '.')
    {
        liveScreen('.');
    }
});

// Clears the screen on click of C button.
function clearScreen() {
    result.value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
    result.value += value;
}
//apply trigo function.
function trigo(func) {
  if (arcTrigo == "a") {
      result.value = "a"+func+"("+result.value+")";
  } else {
      result.value = func+"("+result.value+")";
  }
}
//calc cos
function cos(a) {
  return Math.cos(a * Math.PI / 180).toFixed();
}
//calc sin
function sin(a) {
  return Math.sin(a * Math.PI / 180).toFixed();
}
//calc tan
function tan(a) {
  return Math.tan(a * Math.PI / 180).toFixed();
}
//calc acos
function acos(a) {
  return (Math.acos(a) * 180 / Math.PI).toFixed();
}
//calc asin
function asin(a) {
  return (Math.asin(a) * 180 / Math.PI).toFixed();
}
//calc atan
function atan(a) {
  return (Math.atan(a) * 180 / Math.PI).toFixed();
}
//arc trigo.
function second() {
  if (document.getElementById("cos").value == "cos()") {
    document.getElementById("cos").value = "acos()";
    arcTrigo = "a";
  } else {
    document.getElementById("cos").value = "cos()";
    arcTrigo = "";
  }
  if (document.getElementById("sin").value == "sin()") {
    document.getElementById("sin").value = "asin()";
  } else {
    document.getElementById("sin").value = "sin()";
  }
  if (document.getElementById("tan").value == "tan()") {
    document.getElementById("tan").value = "atan()";
  } else {
    document.getElementById("tan").value = "tan()";
  }
}
//apply sqr.
function sqr() {
    result.value = "sqrt("+result.value+")";
}
function sqrt(a) {
  return Math.sqrt(a);
}
// Swaps the style sheet in order to  achieve dark mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}
