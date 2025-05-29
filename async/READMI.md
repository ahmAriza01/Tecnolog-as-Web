# 🌮 Ejemplo de Promises, Async y Await explicado con tortillas

Este ejemplo en TypeScript explica cómo funcionan las promesas (`Promise`), funciones asíncronas (`async`) y el operador `await`, usando una analogía sencilla: **ir por tortillas**.

---

## 🧠 ¿Qué es una Promise?

Una `Promise` (promesa) representa una operación que aún no ha terminado, pero lo hará en el futuro. Tiene tres estados:

- `pending` (pendiente): en proceso.
- `resolved` (resuelta): todo salió bien.
- `rejected` (rechazada): algo falló.

---

## 🍽️ Ejemplo con tortillas

### 🧾 Paso 1: La función que simula pedir tortillas

```ts
function pedirTortillas(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hayMasa = true;
            if (hayMasa) {
                resolve("Aquí están tus tortillas 🌮");
            } else {
                reject("¡No hay masa! 😢");
            }
        }, 3000); // Espera de 3 segundos
    });
}

