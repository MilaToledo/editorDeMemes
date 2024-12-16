//constantes
const btnAplicarUrl = document.getElementById('btn-aplicar-url');
const inputUrl = document.getElementById('input-url');
const loadedImage = document.getElementById('loaded-image');
const imageContainer = document.getElementById('image-container');
const btnImagen = document.getElementById('btn-imagen');
const btnTexto = document.getElementById('btn-texto');
const toolsImg = document.getElementById('tools-img');
const toolsText = document.getElementById('tools-text');
// const tool textooo
const textoTop = document.getElementById('textoTop');
const textoBottom = document.getElementById('textoBottom');
const topTextElement = document.getElementById('top-text');
const bottomTextElement = document.getElementById('bottom-text');
const fontFamilySelect = document.getElementById('font-family');
const fontSizeInput = document.getElementById('font-size');

function applyTextToImage() {
    topTextElement.innerText = textoTop.value; // actualiza el texto superior
    bottomTextElement.innerText = textoBottom.value; // actualiza el texto inferior
    const selectedFont = fontFamilySelect.value; // oobtiene la fuente seleccionada
    topTextElement.style.fontFamily = selectedFont; // aplica la fuente al texto superior
    bottomTextElement.style.fontFamily = selectedFont;

    const fontSize = fontSizeInput.value + 'px'; // obtiene el tamaño de fuente
    topTextElement.style.fontSize = fontSize; // aplica el tamaño al texto superior
    bottomTextElement.style.fontSize = fontSize; // "" inferior

    // Ajusta el tamaño de la fuente si el texto se sale del contenedor
    adjustFontSizeToFit(topTextElement);
    adjustFontSizeToFit(bottomTextElement);
}

// Función para ajustar el tamaño de la fuente si el texto se sale del contenedor
function adjustFontSizeToFit(textElement) {
    const containerWidth = document.getElementById('image-container').clientWidth;
    let fontSize = parseInt(textElement.style.fontSize);

    // Reduce el tamaño de la fuente hasta que el texto quepa en el contenedor
    while (textElement.scrollWidth > containerWidth && fontSize > 10) {
        fontSize--;
        textElement.style.fontSize = fontSize + 'px';
    } // aplica la fuente al texto inferior
}


// mostrar la sección de imagen
btnImagen.addEventListener('click', function() {
    toolsImg.style.display = 'block'; // muestra la sección de imagen
    toolsText.style.display = 'none'; // sculta la sección de texto
});

// mostrar la sección de texto
btnTexto.addEventListener('click', function() {
    toolsText.style.display = 'block'; // muestra la sección de texto
    toolsImg.style.display = 'none'; // oculta la sección de imagen
});

btnAplicarUrl.addEventListener('click', function() {
    const imageUrl = inputUrl.value; // obtiene el valor del input

    if (imageUrl) {
        loadedImage.src = imageUrl; // establece la fuente de la imagen
        loadedImage.style.display = 'block'; // muestra la imagen
        imageContainer.style.backgroundColor = 'transparent'; // cambia el fondo a transparente
    } else {
        alert('Por favor, pega un URL de imagen válido.');
    }
});

//acordarse importanteeee
function loadImageFromUrl() {
    const imageUrl = imageUrlInput.value; // obtiene el URL de la imagen
    loadedImage.src = imageUrl; // establece la fuente de la imagen
    loadedImage.onload = function() {
        loadedImage.style.display = 'block'; // muestra la imagen
        applyTextToImage(); // aaplica el texto después de cargar la imagen
    };
}

textoTop.addEventListener('input', applyTextToImage);
textoBottom.addEventListener('input', applyTextToImage);
fontFamilySelect.addEventListener('change', applyTextToImage); // Evento para cambiar la fuente
fontSizeInput.addEventListener('input', applyTextToImage);
loadImageUrlButton.addEventListener('click', loadImageFromUrl); // Evento para cargar imagen desde URL


