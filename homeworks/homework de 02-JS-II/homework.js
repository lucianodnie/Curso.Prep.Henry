// No cambies los nombres de las funciones.

  function obtenerMayor()
  {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    var y;
    var x;

    if (x < y)
    {
    console.log ("resultado 1: " + x + " es mas grande que " + y);
    }
    if (x === y)
    {
    console.log ("resultado 2: " + x + " es igual a " + y);
    }
    if (y < x)
    {
    console.log ("resultado 3:" + y + " es mas grande que " + x);
    }
    obtenerMayor();
  }


function saludo(idioma)
{
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma = aleman)
  {
  console.log("Guten Tag!");
  }
  if (idioma = mandarin)
  {
  console.log("Ni Hao!");
  }
  if (idioma = ingles)
  {
  console.log("Hello!");
  }
  else
  {
    console.log("Hola!");
  }
  saludo();
}

function esDiezOCinco()
{
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    var numero = 15;
    if (numero = 10 || numero = 5)
    {
    console.log("true");
    }
    else
    {
      console.log("false");
    }
    esDiezOCinco();
}

function estaEnRango(numero)
{
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 20 && numero > 50)
  {
    console.log("true");
  }
  else
  {
    console.log("false");
  }
  estaEnRango();
}

function esEntero(numero)
{
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero = Math.floor(numero))
  {
      console.log("true");
  }
  else
  {
    console.log("false");
  }
  esEntero();
}

function fizzBuzz()
{
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var f = 3;
  var b = 5;
  var a = 9;
  var af = a % f;
  var ab = a % b;

  if (af = 0)
  {
  console.log("Fizz");
  }
  if (ab = 0)
  {
  console.log("Buzz");
  }
  if (ab = 0 && af = 0)
  {
  console.log("FizzBuzz");
  }
  else {
    console.log(a + " no es fizz, ni buzz, tampoco FizzBuzz");
  }
  fizzBuzz();
}
