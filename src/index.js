document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos con la clase "item"
    const items = document.querySelectorAll(".item");

    // Asignar un evento "mouseover" a cada elemento
    items.forEach(item => {
        item.addEventListener("mouseover", function() {
            // Obtener el número del sonido desde el atributo "data-sound"
            const soundNumber = item.getAttribute("data-sound");

            // Reproducir el sonido correspondiente
            const audio = document.getElementById("sound" + soundNumber);
            audio.currentTime = 0; // Reiniciar la reproducción si ya está sonando
            audio.play();
        });
    });

    // Agregar evento de clic al botón con ID "start"
    const startButton = document.getElementById("start");
    startButton.addEventListener("click", function() {
        // Ocultar el div con ID "overlay"
        const overlayDiv = document.getElementById("overlay");
        overlayDiv.style.display = "none";
    });
});
