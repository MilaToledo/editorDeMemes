//constantes
const btnModoOscuro = document.getElementById('btn-modo-oscuro');
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
const alignTextSelect = document.getElementById('alignText');
const colorTextInput = document.getElementById('colorText');
const colorBackgroundInput = document.getElementById('colorBackground');
const noBackgroundButton = document.getElementById('noBackground');
const outlineNoneButton = document.getElementById('outline-none');
const outlineLightButton = document.getElementById('outline-light');
const outlineDarkButton = document.getElementById('outline-dark');
const letterSpacingInput = document.getElementById('letter-spacing');
const lineHeightInput = document.getElementById('line-height');
//const tools img
const colorInput = document.getElementById('input-color');
const brightnessInput = document.getElementById('filter-brillo');
const opacityInput = document.getElementById('filter-opacidad');
const contrastInput = document.getElementById('filter-contraste');
const blurInput = document.getElementById('filter-desenfoque');
const grayscaleInput = document.getElementById('filter-grises');
const sepiaInput = document.getElementById('filter-sepia');
const hueInput = document.getElementById('filter-hue');
const saturadoInput = document.getElementById('filter-saturado');
const invertInput = document.getElementById('filter-negativo');
const buttonDescarga = document.getElementById('buttonDescarga');
const memeCompleto = document.getElementById('image-container');


let isDarkMode = true; // Comienza en modo oscuro

btnModoOscuro.addEventListener('click', function() {
    if (isDarkMode) {
        // Cambiar a modo claro
        document.body.style.backgroundColor = 'white'; // Cambia el color de fondo a blanco
        document.body.style.color = 'black'; // Cambia el color del texto a negro
        btnModoOscuro.textContent = 'Modo Oscuro'; // Cambia el texto del botón
    } else {
        // Cambiar a modo oscuro
        document.body.style.backgroundColor = '#2c3e50'; // Cambia el color de fondo a oscuro
        document.body.style.color = 'white'; // Cambia el color del texto a blanco
        btnModoOscuro.textContent = 'Modo Claro'; // Cambia el texto del botón
    }
    isDarkMode = !isDarkMode; // Cambia el estado del modo
});

function applyTextToImage() {
    topTextElement.innerText = textoTop.value; // actualiza el texto superior
    bottomTextElement.innerText = textoBottom.value; // actualiza el texto inferior
    const selectedFont = fontFamilySelect.value; // oobtiene la fuente seleccionada
    topTextElement.style.fontFamily = selectedFont; // aplica la fuente al texto superior
    bottomTextElement.style.fontFamily = selectedFont;

    const fontSize = fontSizeInput.value + 'px'; // obtiene el tamaño de fuente
    topTextElement.style.fontSize = fontSize; // aplica el tamaño al texto superior
    bottomTextElement.style.fontSize = fontSize; // "" inferior

    // ajusta el tamaño de la fuente si el texto se sale del contenedor
    adjustFontSizeToFit(topTextElement);
    adjustFontSizeToFit(bottomTextElement);

     // Fijar posiciones de los textos
    topTextElement.style.top = "0";
    bottomTextElement.style.top = "auto";
    bottomTextElement.style.bottom = "0";
}


// función para ajustar el tamaño de la fuente si el texto se sale del contenedor
function adjustFontSizeToFit(textElement) {
    const containerWidth = document.getElementById('image-container').clientWidth;
    let fontSize = parseInt(textElement.style.fontSize);

    // Reduce el tamaño de la fuente hasta que el texto quepa en el contenedor
    while (textElement.scrollWidth > containerWidth && fontSize > 10) {
        fontSize--;
        textElement.style.fontSize = fontSize + 'px';
    } // aplica la fuente al texto inferior
}

textoTop.addEventListener('input', applyTextToImage);
textoBottom.addEventListener('input', applyTextToImage);
fontFamilySelect.addEventListener('change', applyTextToImage); 
fontSizeInput.addEventListener('input', applyTextToImage);


alignTextSelect.addEventListener('change', function() {
    const alignment = this.value; 
    topTextElement.style.textAlign = alignment; // aplica la alineación al texto superior
    bottomTextElement.style.textAlign = alignment;  
});

textoTop.addEventListener('input', function() {
    applyTextToImage();
    topTextElement.style.textAlign = alignTextSelect.value; 
});

textoBottom.addEventListener('input', function() {
    applyTextToImage();
    bottomTextElement.style.textAlign = alignTextSelect.value; 
});

colorTextInput.addEventListener('input', function() {
    const selectedColor = this.value; //this se refiere al elemento que disparó el evento
    topTextElement.style.color = selectedColor; 
    bottomTextElement.style.color = selectedColor; 
});

// color de fondo texto
colorBackgroundInput.addEventListener('input', function() {
    const selectedBackgroundColor = this.value; 
    topTextElement.style.backgroundColor = selectedBackgroundColor; 
    bottomTextElement.style.backgroundColor = selectedBackgroundColor; 
});

// agrega un evento para el botón "Sin Fondo"
noBackgroundButton.addEventListener('click', function() {
    topTextElement.style.backgroundColor = 'transparent'; 
    bottomTextElement.style.backgroundColor = 'transparent'; 
});

function applyOutline(color) {
    topTextElement.style.textShadow = color ? `0 0 5px ${color}` : 'none'; // Aplica el contorno
    bottomTextElement.style.textShadow = color ? `0 0 5px ${color}` : 'none'; // Aplica el contorno
}

// agrega eventos a los botones
outlineNoneButton.addEventListener('click', function() {
    applyOutline(null); 
});

outlineLightButton.addEventListener('click', function() {
    applyOutline('white'); 
});

outlineDarkButton.addEventListener('click', function() {
    applyOutline('black'); 
});

letterSpacingInput.addEventListener('input', function() {
    const letterSpacingValue = this.value; 
    topTextElement.style.letterSpacing = `${letterSpacingValue}px`; // aplica el espaciado de letras
    bottomTextElement.style.letterSpacing = `${letterSpacingValue}px`; 
});

// Función para actualizar la altura de línea
lineHeightInput.addEventListener('input', function() {
    const lineHeightValue = this.value; 
    topTextElement.style.lineHeight = lineHeightValue; // Aplica la altura de línea
    bottomTextElement.style.lineHeight = lineHeightValue; 
});


// muestr la sección de imagen
btnImagen.addEventListener('click', function() {
    toolsImg.style.display = 'block'; // muestra la sección de imagen
    toolsText.style.display = 'none'; // sculta la sección de texto
});

// sección de texto
btnTexto.addEventListener('click', function() {
    toolsText.style.display = 'block'; // muestra la sección de texto
    toolsImg.style.display = 'none'; // oculta la sección de imagen
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

//loadImageUrlButton.addEventListener('click', loadImageFromUrl);//


//filtros d imagen
colorInput.addEventListener('input', function() {
    const selectedColor = this.value;
    document.getElementById('image-container').style.backgroundColor = selectedColor; 
});

loadedImage.style.filter = `brightness(${brightnessInput.value}%)`;

// cambios en el control de rango de brillo
brightnessInput.addEventListener('input', function() {
    loadedImage.style.filter = `brightness(${this.value}%)`;
});

loadedImage.style.opacity = opacityInput.value / 100; 

opacityInput.addEventListener('input', function() {
    loadedImage.style.opacity = this.value / 100; 
});

loadedImage.style.filter += ` contrast(${contrastInput.value}%)`; 

contrastInput.addEventListener('input', function() {
    loadedImage.style.filter = `brightness(${brightnessInput.value}%) contrast(${this.value}%)`; 
});

loadedImage.style.filter += ` blur(${blurInput.value}px)`; 

blurInput.addEventListener('input', function() {
    loadedImage.style.filter = `brightness(${brightnessInput.value}%) contrast(${contrastInput.value}%) blur(${this.value}px)`; 
});

loadedImage.style.filter += ` grayscale(${grayscaleInput.value}%)`; 

grayscaleInput.addEventListener('input', function() {
    loadedImage.style.filter = `brightness(${brightnessInput.value}%) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${this.value}%)`;
});

loadedImage.style.filter += ` sepia(${sepiaInput.value}%)`; 

sepiaInput.addEventListener('input', function() {
    loadedImage.style.filter = `brightness(${brightnessInput.value}%) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${grayscaleInput.value}%) sepia(${this.value}%)`; 
});

//alternativa a los anteriores para que funcionen 
function applyHueFilter() {
    loadedImage.style.filter = `hue-rotate(${hueInput.value}deg)`;
}
hueInput.addEventListener('input', applyHueFilter);
loadedImage.onload = applyHueFilter;

function applySaturationFilter() {
    loadedImage.style.filter = `saturate(${saturadoInput.value}%)`;
}

saturadoInput.addEventListener('input', applySaturationFilter);
loadedImage.onload = applySaturationFilter;

function applyInvertFilter() {
    loadedImage.style.filter = `invert(${invertInput.value}%)`;
}

invertInput.addEventListener('input', applyInvertFilter);
loadedImage.onload = applyInvertFilter;

buttonDescarga.addEventListener("click", (e) => {
    domtoimage.toBlob(memeCompleto).then((blob) => {
        saveAs(blob, "my-meme.png");
      }).catch((error)=> {console.log(error)});
})
