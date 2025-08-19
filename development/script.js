const palabras = [
    { palabra: "perro", pista: "Es un animal doméstico que ladra" },
    { palabra: "computadora", pista: "La usas para programar y navegar en internet" },
    { palabra: "colombia", pista: "País famoso por su café" },
    { palabra: "sol", pista: "Estrella que ilumina la Tierra" },
    { palabra: "pizza", pista: "Comida italiana muy popular con queso" },
    { palabra: "guitarra", pista: "Instrumento musical de cuerdas" },
    { palabra: "elefante", pista: "El animal terrestre más grande" },
    { palabra: "marte", pista: "Planeta rojo del sistema solar" },
    { palabra: "python", pista: "Lenguaje de programación popular" },
    { palabra: "oceano", pista: "Gran masa de agua salada que cubre la Tierra" },
    { palabra: "montaña", pista: "Elevación natural del terreno" },
    { palabra: "libro", pista: "Objeto con páginas que contienen texto o imágenes" },
    { palabra: "avión", pista: "Medio de transporte aéreo" },
    { palabra: "jardín", pista: "Lugar donde se cultivan plantas y flores" },
    { palabra: "reloj", pista: "Dispositivo para medir el tiempo" }

];

let palabraSecreta = "";
let pista = "";
let palabraMostrada = [];
let intentos = 6;

function nuevoJuego() {
    const seleccion = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = seleccion.palabra.toLowerCase();
    pista = seleccion.pista;
    palabraMostrada = Array(palabraSecreta.length).fill("_");
    intentos = 6;

    document.getElementById("pista").textContent = "💡 Pista: " + pista;
    document.getElementById("palabra-oculta").textContent = palabraMostrada.join(" ");
    document.getElementById("mensaje").textContent = "";
    document.getElementById("entrada").value = "";
}

function adivinar() {
    const entrada = document.getElementById("entrada").value.toLowerCase();
    let mensaje = "";

    if (!entrada) {
        return;
    }

    if (entrada.length === 1) {
        // Adivinar letra
        let acierto = false;
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === entrada) {
                palabraMostrada[i] = entrada;
                acierto = true;
            }
        }
        if (!acierto) {
            intentos--;
            mensaje = "❌ Letra incorrecta. Intentos restantes: " + intentos;
        }
    } else {
        // Adivinar palabra completa
        if (entrada === palabraSecreta) {
            palabraMostrada = palabraSecreta.split("");
        } else {
            intentos--;
            mensaje = "❌ Palabra incorrecta. Intentos restantes: " + intentos;
        }
    }

    document.getElementById("palabra-oculta").textContent = palabraMostrada.join(" ");

    if (palabraMostrada.join("") === palabraSecreta) {
        mensaje = "🎉 ¡Ganaste! La palabra era: " + palabraSecreta;
    } else if (intentos === 0) {
        mensaje = "💀 Perdiste. La palabra era: " + palabraSecreta;
    }

    document.getElementById("mensaje").textContent = mensaje;
    document.getElementById("entrada").value = "";
}

nuevoJuego();