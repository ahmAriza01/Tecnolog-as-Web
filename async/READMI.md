# 🌮 Ejemplo de Promesa y Async/Await: ¡Ir por Tortillas!


## Código

```ts

// Tortillas/promesaTortillasThen.ts
export function pedirTortillasThen(): Promise<string> {
  return new Promise((resolve, reject) => {
    
      const hayMasa = true; // ← controla si hay masa SOLO para esta versión
      if (hayMasa) {
        resolve("Tortillas listas con .then 🌮");
      } else {
        reject("No hay masa (versión .then) 😢");
      }
  
  });
}

// Tortillas/promesaTortillasAsync.ts

function pedirTortillasAsync(): Promise<string> {
  return new Promise((resolve, reject) => {
    
      const hayMasa = true; // ← controla si hay masa SOLO para esta versión
      if (hayMasa) {
        resolve("Tortillas listas con async/await 🌮");
      } else {
        reject("No hay masa (versión async/await) 😢");
      }
    
  });
}

export async function irPorTortillasAsync(): Promise<string> {
  try {
    const resultado = await pedirTortillasAsync();
    return resultado;
  } catch (error) {
    throw new Error(`Error al pedir tortillas (async/await): ${error}`);
  }
}
```

```ts

// indexThen.ts
pedirTortillasThen()
  .then((respuesta) => {
    console.log("Versión .then:", respuesta);
  })
  .catch((error) => {
    console.error("Versión .then:", error);
  });


// indexAsync.ts

irPorTortillasAsync()
  .then((respuesta) => {
    console.log("Versión async/await:", respuesta);
  })
  .catch((error) => {
    console.error("Versión async/await:", error);
  });

```
# Conceptos 

## Promise 
- "algo que puede tardar, como ir por tortillas"

## resolve() 
- "Todo salio bien, "¡tenemos las tortillas!"

## reject() 
- Algo salio mal, no hay masa

## asinc 
- Declara una función que puede esperar (await)

## await 
- Espera a que la promesa termine para seguir



