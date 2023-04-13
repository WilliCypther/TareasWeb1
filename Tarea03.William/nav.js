
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//En esta funcion utilice esta logica de validacion para la informacion que solicita el user
function parImpar() {
  const num = parseInt(prompt("Ingrese un número entero:"));
  let resultado;
  if (num % 2 == 0) {
      resultado = num + " es un número par.";
  } else {
      resultado = num + " es un número impar.";
  }
  document.getElementById("resultado").innerHTML = resultado;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Este metodo se encarga de analizar si la cadena de texto es usado con Mayusculas Minusculas, o ya sea de ambas

function tipoTexto() {
  const texto = prompt("Ingrese una cadena de texto:");
  let resultado;
  if (texto == texto.toUpperCase()) {
      resultado = "La cadena de texto ingresada está formada solo por mayúsculas.";
  } else if (texto == texto.toLowerCase()) {
      resultado = "La cadena de texto ingresada está formada solo por minúsculas.";
  } else {
      resultado = "La cadena de texto ingresada está formada por una mezcla de mayúsculas y minúsculas.";
  }
  document.getElementById("resultado").innerHTML = resultado;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Esta funcion se encarga de validar si la consulta del usuario es Polidromo o no es polidoromo.
function esPalindromo() {
  const texto = prompt("Ingrese una cadena de texto:");
  const textoSinEspacios = texto.toLowerCase().replace(/\s/g, "");
  const textoInvertido = textoSinEspacios.split("").reverse().join("");
  let resultado;
  if (textoSinEspacios == textoInvertido) {
      resultado = '"' + texto + '"' + " es un palíndromo.";
  } else {
      resultado = '"' + texto + '"' + " no es un palíndromo.";
  }
  document.getElementById("resultado").innerHTML = resultado;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
