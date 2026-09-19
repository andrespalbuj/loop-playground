/*
Enunciado: Simular una extracción de la Bonoloto.
Extrae 6 bolas aleatorias (1-49) sin usar funciones.
Usa `Math.random` y un bucle `for`. Muestra por consola:
    Bola 1: Número


     ____   ____   ____   ____   ____   ____
    / __ \ / __ \ / __ \ / __ \ / __ \ / __ \
   | |  | | |  | | |  | | |  | | |  | | |  | |
   | |  | | |  | | |  | | |  | | |  | | |  | |
    \_\_/  \_\_/  \_\_/  \_\_/  \_\_/  \_\_/
      (1)    (2)    (3)    (4)    (5)    (6)

Ejemplo salida:
Bola 1: 12
Bola 2: 37
Bola 3: 17
Bola 4: 2
Bola 5: 11
Bola 6: 11
...
NO TE PREOCUPES SI HAY NÚMEROS REPETIDOS.
*/
  
for (let i = 1; i <= 6; i++) {
   const Papeleta = Math.floor(Math.random() * 49) + 1;
  console.log("Bola " + i + ": " + Papeleta);
}
