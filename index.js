// TOGLE

// Constantes toggle tittles
const toggleAditionalInformation = document.querySelector('.title-aditional-information');

//Constantes Contenido texto
const contentAditionalInformation = document.querySelector('.text-aditional-information');

//Funcion
toggleAditionalInformation.addEventListener('click', () => {
    contentAditionalInformation.classList.toggle('hidden');
});
