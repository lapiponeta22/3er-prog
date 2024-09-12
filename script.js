// Lista de URLs de imágenes de paisajes
const images = [
    'https://source.unsplash.com/1600x900/?landscape,forest',
    'https://source.unsplash.com/1600x900/?landscape,mountain',
    'https://source.unsplash.com/1600x900/?landscape,beach',
    'https://source.unsplash.com/1600x900/?landscape,lake',
    'https://source.unsplash.com/1600x900/?landscape,desert'
];

let currentIndex = 0;

// Función para cambiar la imagen
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('landscape-image').src = images[currentIndex];
}

// Configurar el evento de clic en el cuerpo de la página
document.body.addEventListener('click', changeImage);

// Inicializar con la primera imagen
changeImage();
