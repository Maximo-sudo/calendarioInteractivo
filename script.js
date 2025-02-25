// document.addEventListener('mousemove', (e) => {
//     const { clientX, clientY } = e;
//     const { innerWidth, innerHeight } = window;
//     const centerX = innerWidth / 2;
//     const centerY = innerHeight / 2;
   
//     const deltaX = (centerX - clientX) / centerX;
//     const deltaY = (centerY - clientY) / centerY;
   
//     const fondo = document.getElementById('fondo');
//     fondo.style.backgroundPosition = `${50 + deltaX * 5}% ${50 + deltaY * 10}%`;
// });

// document.addEventListener('mousemove', (e) => {
//     const { clientX, clientY } = e;

//     const circulo = document.createElement('div');
//     circulo.className = 'circulo';
//     circulo.style.left = '${clientX - 15}px';
//     circulo.style.top = '${clientY - 15}px';

//     document.body.appendChild(circulo);

//     setTimeout(() => {
//         rastro.remove();
//     }, 1000);
// });

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;

    const circulo = document.createElement('div');
    circulo.className = 'circulo';

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 50;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

    circulo.style.left = `${clientX + offsetX -15}px`;
    circulo.style.top = `${clientY + offsetY -15}px`;

    document.body.appendChild(circulo);

    setTimeout(() => {
        circulo.remove();
    }, 1000);
});
