const titulo = document.querySelector('h1');

titulo.addEventListener('click', () => {
    titulo.classList.toggle('title-animation');
});

new SimpleAnime();