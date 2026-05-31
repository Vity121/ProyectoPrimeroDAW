// Contenido principal
const titulo = document.querySelector("header h1")
console.log(titulo)

const aside = document.querySelector("aside")
console.log(aside)

const article = document.querySelector("article")
console.log(article)

// Contenido de las imágenes
const imagenes = document.querySelectorAll(".dimensiones-imagenes")
console.log(imagenes)

// Contenido de las tablas
const albion = document.querySelector(".albion")
console.log(albion)

const silksong = document.querySelector(".silksong")
console.log(silksong)

// Contenido de footer y formulario
const email = document.querySelector("#idCorreo")
console.log(email)

const btnenviar = document.querySelector("form")
console.log(btnenviar)

const derechos = document.querySelector(".derechos")
console.log(derechos)

const etiquetaNewsletter = document.querySelector("form label")
console.log(etiquetaNewsletter)

// Listeners de los eventos
titulo.addEventListener("mouseenter", tituloRebotando)

aside.addEventListener("click", cambioColor)

article.addEventListener("mouseenter", cambioColor)

imagenes.forEach((imagen) => {
    imagen.addEventListener("click", fotoAleatoria);
});

albion.addEventListener("click", audioVolumenMaximo)

silksong.addEventListener("click", mostrarGIF)

email.addEventListener("keydown", mostrarTeclaMolesta)

btnenviar.addEventListener("submit", borradoTotal)

derechos.addEventListener("click", rotacionDerechos)

etiquetaNewsletter.addEventListener("mouseover", ampliarMucho)

window.onload = mostrarEventos()

// Funciones para los eventos
function mostrarEventos() {
        alert("EVENTOS EN LA WEB:\n1.- Pasar por encima del título\n2.- Click sobre cualquier elemento dentro del aside\n3.- Entrar y salir con el ratón del article\n4.- Click sobre cualquier imagen de los juegos\n5.- Click sobre la row de la tabla llamada 'Albion' (PRECAUCIÓN)\n6.- Click en la row de la segunda tabla del aside llamada 'Hollow Knight Silksong'\n7.- Escribir en el campo del correo\n8.- Click en el botón de enviar\n9.- Click texto derechos reservados\n10.- Pasar el ratón por encima del label del correo")
}

function tituloRebotando(){
    console.log("Funciona evento título")
    titulo.classList.add("efecto-rebote")
    setTimeout(function() {
        titulo.classList.remove("efecto-rebote");
    }, 3000);
}

function cambioColor(e){
    console.log("Funciona evento cambio color")
    var num1 = numeroRandom(0, 256)
    var num2 = numeroRandom(0, 256)
    var num3 = numeroRandom(0, 256)
    var colorRGB = "rgb(" + num1 + "," + num2 + "," + num3 + ")"; 
    e.target.style.backgroundColor = colorRGB
}

function fotoAleatoria(e) {
    console.log("Funciona evento cambio imágenes")
    imagen = e.target
    num = numeroRandom(1, 5)
    switch (num) {
        case 1: imagen.src = "media/Hades.png"
        break;
        case 2: imagen.src = "media/Hades2.png"
        break;
        case 3: imagen.src = "media/HollowKnight.png"
        break;
        case 4: imagen.src = "media/StardewValley.png"
        break;
        case 5: imagen.src = "media/logotitulo.png"
        break;
    }
}

function audioVolumenMaximo(e) {
    e.stopPropagation();
    // 1. Configuración del audio
    const miAudio = new Audio("media/albionmeme.mp3");
    miAudio.volume = 1; 

    // 2. Definición de resultado correcto
    miAudio.play().then(() => {
        const num1 = 1;
        const num2 = 1;
        const resultadoCorrecto = 7;
        let acierto = false;

        while (!acierto) {
            let respuestaUsuario = prompt(`Resuelve: ${num1} + ${num2}`);

            // Si el usuario cancela el prompt
            if (respuestaUsuario === null) {
                alert("Esta feo salirse sin resolverlo")
                miAudio.pause();
                return; 
            }

            if (parseInt(respuestaUsuario) === resultadoCorrecto) {
                acierto = true;
                miAudio.pause();
                alert("Quien me lo iba a decir");
            } else {
                alert("¡Error! Pista: Fran Perea no te enseñó eso");
            }
        }
    })
}

function mostrarGIF(e) {
    e.stopPropagation();
    console.log("Funciona evento tabla Hollow Knight Silksong")
    var nuevoGif = document.createElement('img');
    nuevoGif.src = "media/Silksong.gif"; 
    nuevoGif.className = "gif-invocado";
    nuevoGif.width = 100; 

    document.body.appendChild(nuevoGif);

    // 2. Lógica de Arrastre (MouseDown)
    nuevoGif.onmousedown = function(event) {
        event.preventDefault(); // Evita el arrastre por defecto del navegador

        // Calculamos la distancia entre el cursor y el borde del GIF
        var shiftX = event.clientX - nuevoGif.getBoundingClientRect().left;
        var shiftY = event.clientY - nuevoGif.getBoundingClientRect().top;

        // Quitamos el transform de centrado para que no interfiera con left/top
        nuevoGif.style.transform = 'none';

        function mover(clientX, clientY) {
            nuevoGif.style.left = (clientX - shiftX) + 'px';
            nuevoGif.style.top = (clientY - shiftY) + 'px';
        }

        function onMouseMove(event) {
            mover(event.clientX, event.clientY);
        }

        // Evento al mover el ratón por toda la pantalla
        document.addEventListener('mousemove', onMouseMove);

        // Evento al soltar el botón del ratón
        document.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    };
}

function mostrarTeclaMolesta(e) {
    console.log("Funciona evento escribir formulario")
    alert("Has pulsado la tecla " + e.key)
}

function borradoTotal(e) {
    e.preventDefault();
    console.log("Funciona evento botón enviar para borrar")
    email.value = ""
    alert("Email borrado correctamente :)")
}

function rotacionDerechos() {
    console.log("Funciona evento rotación derechos")
    derechos.classList.toggle("derechos-locos");
}

function ampliarMucho() {
    console.log("Funciona evento label del form")
    etiquetaNewsletter.classList.toggle("label-gigante");
}

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}