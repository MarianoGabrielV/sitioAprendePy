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

document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.querySelector('.main-text');
    const text = 'Bienvenido al mundo de Python, un lenguaje de programación versátil, poderoso y fácil de aprender. Este sitio web está diseñado para acercarte a Python de manera amigable y práctica, ofreciendo recursos para principiantes y avanzados. Encontrarás ejercicios y proyectos que te ayudarán a aplicar los conceptos aprendidos, además de materiales de repaso para consolidar tus conocimientos. Python te permitirá desarrollar aplicaciones web, programas de inteligencia artificial y automatizar tareas cotidianas. Explora, experimenta y sumérgete en el mundo de Python. ¡Estamos emocionados de acompañarte en esta aventura!';
    let index = 0;
    const speed = 50;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});


