# 🌮 Ejemplo de Promesa y Async/Await: ¡Ir por Tortillas!


## Código

```ts
// Tortillas/promesaTortillas.ts

// Función que devuelve una promesa
export function pedirTortillas(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hayMasa = true; // Cambiar a false para probar el error
      if (hayMasa) {
        resolve("Aquí están tus tortillas 🌮");
      } else {
        reject("¡No hay masa! 😢");
      }
    }, 2000);
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
