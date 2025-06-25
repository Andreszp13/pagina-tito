// Mostrar imágenes en secuencia con intervalo de 300ms en bucle infinito
document.addEventListener('DOMContentLoaded', () => {
    // Lista de nombres de imágenes
    const nombres = [
        'imagen1.jpg','imagen2.jpg','imagen3.jpg','imagen4.jpg','imagen5.jpg','imagen6.jpg','imagen7.jpg','imagen8.jpg','imagen9.jpg','imagen10.jpg','imagen11.jpg','imagen12.jpg','imagen13.jpg','imagen14.jpg','imagen15.jpg','imagen16.jpg','imagen17.jpg','imagen18.jpg','imagen19.jpg','imagen20.jpg','imagen21.jpg','imagen22.jpg','imagen23.jpg','imagen24.jpg','imagen25.jpg','imagen26.jpg','imagen27.jpg','imagen28.jpg','imagen29.jpg','imagen30.jpg'
    ];
    const container = document.getElementById('animation-container');
    if (!container) {
        console.error('No se encontró el contenedor #animation-container');
        return;
    }
    console.log('Contenedor encontrado.');
    nombres.forEach(nombre => {
        const div = document.createElement('div');
        div.className = 'imagen';
        const img = document.createElement('img');
        // Asignar solo el alt, la ruta se corrige después
        img.alt = nombre;
        img.style.border = '2px solid red'; // Borde rojo para depuración
        div.appendChild(img);
        container.appendChild(div);
    });

    const imagenes = document.querySelectorAll('.imagen img');
    console.log('Imágenes insertadas:', imagenes.length);
    let indice = 0;

    if (imagenes.length === 0) {
        console.warn('No se encontraron imágenes dentro de un contenedor con clase .imagen.');
        return;
    }
    // Corregir la ruta de las imágenes
    document.querySelectorAll('.imagen img').forEach((img, i) => {
        img.src = 'img/' + nombres[i];
        img.style.display = 'none';
    });

    // Mostrar solo una imagen a la vez en bucle
    function mostrarImagenActual() {
        imagenes.forEach((img, i) => {
            img.style.display = (i === indice) ? 'block' : 'none';
        });
    }

    mostrarImagenActual();
    setInterval(() => {
        indice = (indice + 1) % imagenes.length;
        mostrarImagenActual();
    }, 300);
});