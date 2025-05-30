# 🌮 Ejemplo de Promesa y Async/Await: ¡Ir por Tortillas!


## Código

```ts
// Tortillas/promesaTortillas.ts

// Función que devuelve una promesa
export function pedirTortillas(): Promise<string> {
  return new Promise((resolve, reject) => {
    
      const hayMasa = true; // Cambiar a false para probar el error
      if (hayMasa) {
        resolve("Aquí están tus tortillas 🌮");
      } else {
        reject("¡No hay masa! 😢");
      }
  });
}

// Función async que espera la promesa
export async function irPorTortillasAsync(): Promise<string> {
  try {
    const resultado = await pedirTortillas();
    return resultado;
  } catch (error) {
    throw new Error(`Error al pedir tortillas: ${error}`);
  }
}

```

```ts

// index.ts

import { pedirTortillas, irPorTortillasAsync } from "./Tortillas/promesaTortillas";

// Versión con .then() y .catch()
pedirTortillas()
  .then((respuesta) => {
    console.log("Versión Promise .then:", respuesta);
  })
  .catch((error) => {
    console.error("Versión Promise .catch:", error);
  });

// Versión con async/await
irPorTortillasAsync()
  .then((respuesta) => {
    console.log("Versión Async/Await:", respuesta);
  })
  .catch((error) => {
    console.error("Versión Async/Await:", error);
  });
