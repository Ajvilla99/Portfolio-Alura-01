const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');
const imagenes = document.querySelectorAll('.img_proyect');
const fondo = document.getElementById('carta');

imagenes.forEach(img => {
    img.addEventListener('click', (a) => {
        let src = a.target.getAttribute('src')
        fondo.style.backgroundImage = `url(${src})`;
        fondo.style.backgroundSize = 'cover'
    })
});

prev.addEventListener('click', () => {
    slider.scrollLeft -= 230;
})

next.addEventListener('click', () => {
    slider.scrollLeft += 228;
})