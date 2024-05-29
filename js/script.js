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


 
