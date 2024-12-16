// Almacena constantes
const btnAplicarUrl = document.getElementById('btn-aplicar-url');
const inputUrl = document.getElementById('input-url');
const loadedImage = document.getElementById('loaded-image');
const imageContainer = document.getElementById('image-container');
const btnImagen = document.getElementById('btn-imagen');
const btnTexto = document.getElementById('btn-texto');
const toolsImg = document.getElementById('tools-img');
const toolsText = document.getElementById('tools-text');

const textoTop = document.getElementById('textoTop');
const textoBottom = document.getElementById('textoBottom');
const topTextElement = document.getElementById('top-text');
const bottomTextElement = document.getElementById('bottom-text');

// Función para aplicar texto a la imagen
function applyTextToImage() {
    topTextElement.innerText = textoTop.value; // Actualiza el texto superior
    bottomTextElement.innerText = textoBottom.value; // Actualiza el texto inferior
}

// Agregar eventos para aplicar texto cuando se cambien los valores
textoTop.addEventListener('input', applyTextToImage);
textoBottom.addEventListener('input', applyTextToImage);


// Función para mostrar la sección de imagen
btnImagen.addEventListener('click', function() {
    toolsImg.style.display = 'block'; // Muestra la sección de imagen
    toolsText.style.display = 'none'; // Oculta la sección de texto
});

// Función para mostrar la sección de texto
btnTexto.addEventListener('click', function() {
    toolsText.style.display = 'block'; // Muestra la sección de texto
    toolsImg.style.display = 'none'; // Oculta la sección de imagen
});

btnAplicarUrl.addEventListener('click', function() {
    const imageUrl = inputUrl.value; // Obtiene el valor del input

    if (imageUrl) {
        loadedImage.src = imageUrl; // Establece la fuente de la imagen
        loadedImage.style.display = 'block'; // Muestra la imagen
        imageContainer.style.backgroundColor = 'transparent'; // Cambia el fondo a transparente
    } else {
        alert('Por favor, pega un URL de imagen válido.'); // Mensaje de alerta si el URL está vacío
    }
});

