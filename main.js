// Agrega un evento de clic al botón con id 'agregarImagenBtn'
document.getElementById('agregarImagenBtn').addEventListener('click', function() {
    // Obtiene el valor del campo de entrada con id 'urlImagen'
    const url = document.getElementById('urlImagen').value;
    // Obtiene el valor del campo de entrada con id 'tituloImagen'
    const titulo = document.getElementById('tituloImagen').value;
    // Obtiene el valor del campo de entrada con id 'descripcionImagen'
    const descripcion = document.getElementById('descripcionImagen').value;

    // Verifica si los campos url, titulo y descripcion no están vacíos
    if (url && titulo && descripcion) {
        // Llama a la función para agregar la imagen a la galería
        agregarImagenAGaleria(url, titulo, descripcion);
        // Llama a la función para limpiar el formulario
        limpiarFormulario();
    } else {
        // Muestra una alerta si algún campo está vacío
        alert('Por favor, ingrese la URL, el título y la descripción de la imagen.');
    }
});

// Función para agregar una imagen a la galería
function agregarImagenAGaleria(url, titulo, descripcion) {
    // Obtiene el contenedor de la galería con id 'galeria'
    const galeria = document.getElementById('galeria');

    // Crea un nuevo elemento div para el nuevo ítem de la galería
    const nuevoItem = document.createElement('div');
    // Añade la clase 'galeria-item' al nuevo div
    nuevoItem.classList.add('galeria-item');

    // Crea un elemento de imagen y establece su src y alt
    const imagen = document.createElement('img');
    imagen.src = url;
    imagen.alt = titulo;
    // Añade un evento de clic para mostrar el modal con detalles de la imagen
    imagen.addEventListener('click', function() {
        mostrarModal(url, titulo, descripcion);
    });
    // Añade la imagen al nuevo ítem
    nuevoItem.appendChild(imagen);

    // Crea un div para el título de la imagen y establece su texto
    const tituloElemento = document.createElement('div');
    tituloElemento.classList.add('titulo');
    tituloElemento.textContent = titulo;
    // Añade el título al nuevo ítem
    nuevoItem.appendChild(tituloElemento);

    // Crea un contenedor para los botones
    const botones = document.createElement('div');
    botones.classList.add('botones');

    // Crea un botón para eliminar la imagen
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    // Añade un evento de clic para eliminar el ítem de la galería
    botonEliminar.addEventListener('click', function() {
        galeria.removeChild(nuevoItem);
    });
    // Añade el botón de eliminar al contenedor de botones
    botones.appendChild(botonEliminar);

    // Crea un botón para ver detalles de la imagen
    const botonVerDetalles = document.createElement('button');
    botonVerDetalles.classList.add('ver-detalles');
    botonVerDetalles.textContent = 'Ver Detalles';
    // Añade un evento de clic para mostrar el modal con detalles de la imagen
    botonVerDetalles.addEventListener('click', function() {
        mostrarModal(url, titulo, descripcion);
    });
    // Añade el botón de ver detalles al contenedor de botones
    botones.appendChild(botonVerDetalles);

    // Añade el contenedor de botones al nuevo ítem
    nuevoItem.appendChild(botones);
    // Añade el nuevo ítem a la galería
    galeria.appendChild(nuevoItem);
}

// Función para limpiar el formulario
function limpiarFormulario() {
    // Limpia el valor del campo de entrada con id 'urlImagen'
    document.getElementById('urlImagen').value = '';
    // Limpia el valor del campo de entrada con id 'tituloImagen'
    document.getElementById('tituloImagen').value = '';
    // Limpia el valor del campo de entrada con id 'descripcionImagen'
    document.getElementById('descripcionImagen').value = '';
}

// Función para mostrar el modal con detalles de la imagen
function mostrarModal(url, titulo, descripcion) {
    // Obtiene el modal y sus elementos hijos
    const modal = document.getElementById('modal');
    const modalImagen = document.getElementById('modalImagen');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescripcion = document.getElementById('modalDescripcion');

    // Establece el src de la imagen del modal
    modalImagen.src = url;
    // Establece el texto del título del modal
    modalTitulo.textContent = titulo;
    // Establece el texto de la descripción del modal
    modalDescripcion.textContent = descripcion;
    // Muestra el modal
    modal.classList.add('show');
}

// Añade un evento de clic al botón con id 'closeModal' para cerrar el modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('show');
});

// Añade un evento de clic a la ventana para cerrar el modal si se hace clic fuera de él
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.classList.remove('show');
    }
});
