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
    const text = 'Bienvenido al fascinante mundo de Python, un lenguaje de programación versátil, poderoso y fácil de aprender. Si estás aquí, es probable que estés buscando adentrarte en el emocionante universo de la programación o expandir tus conocimientos en este campo apasionante. ¡Has llegado al lugar indicado! Este sitio web está diseñado con un propósito claro: acercarte a Python de una manera amigable, accesible y, sobre todo, práctica. Ya sea que estés dando tus primeros pasos en la programación o que busques consolidar tus habilidades, aquí encontrarás una amplia variedad de recursos que te ayudarán a comprender los fundamentos de Python y a desarrollar tus capacidades como programador. Desde ejercicios simples hasta proyectos más complejos, este sitio te ofrece material de práctica cuidadosamente seleccionado para que puedas aplicar los conceptos que vayas aprendiendo. Además, si necesitas refrescar tu memoria o repasar algún tema en particular, también encontrarás recursos de repaso que te permitirán consolidar tu comprensión y afianzar tu dominio sobre el lenguaje. Ya sea que sueñes con desarrollar aplicaciones web, crear programas de inteligencia artificial o simplemente automatizar tareas cotidianas, Python es una herramienta poderosa que te abrirá un mundo de posibilidades. Y aquí, en este sitio, estamos aquí para acompañarte en cada paso de tu viaje hacia el dominio de este increíble lenguaje de programación. Así que adelante, explora, experimenta y sumérgete en el maravilloso mundo de Python. Estamos emocionados de tenerte aquí y de ser parte de tu aventura en el fascinante mundo de la programación. ¡Bienvenido a bordo!';
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


