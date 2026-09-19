/**
 * Bucle condicionado
 *
 * Apartado 1: Ejecuta el script y observa que sucede.
 * ¿Cuantas veces se ejecuta el código del bucle?
 *
 * Apartado 2: Modifica el código del bucle y usa una estrctura condicional if..else; para que:
 * Si el valor de la variable i es un número negativo, mostrar por el terminal "Soy un número negativo"
 * Si el valor de la variable i es un número positivo, mostrar por el terminal "Soy un número positivo"
 */

let numeroFinal = 5;

for (i = -5; i < numeroFinal; i++) {
  console.log(i);

   if ( i < 0 ){
      console.log("Soy un núemro negativo!");
}
   else if (i >= 0){
      console.log("Soy un número positivo!");
}
}



/**
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODc4MzYyNF8yMjIwMzg1OA
 */
