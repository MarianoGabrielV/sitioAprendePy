function mostrarEjercicios(ejercicioId) {
    // Ocultar todos los contenedores de ejercicios
    const contenedores = document.querySelectorAll('.container.mt-1');
    contenedores.forEach(contenedor => {
        contenedor.style.display = 'none';
    });

    // Mostrar el contenedor de ejercicios seleccionado
    const ejercicio = document.getElementById(ejercicioId);
    if (ejercicio) {
        ejercicio.style.display = 'block';
    }

    // Mostrar la imagen principal
    document.getElementById('mainContent').style.display = 'block';
}


$(document).ready(function(){
    $('#carouselExampleCaptions').carousel({
        interval: 3200 // Cambia este valor para ajustar el tiempo en milisegundos (1000 ms = 1 segundo)
    });
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in-left, .fade-in-right');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});




