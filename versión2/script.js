// proibirZoom con Ctrl + Scroll y Ctrl + (+, -, 0)
document.addEventListener("wheel", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "0")) {
        event.preventDefault();
    }
});


// movimientoContinuoFiguras
window.addEventListener('scroll', function() {
    const figures = document.querySelectorAll('.figure');
    figures.forEach((figure, index) => {
        const speed = index + 1;
        const x = window.scrollY * speed * 0.05;
        figure.style.transform = `translateY(${x}px) rotate(${x}deg)`;
    });
});


// desplazamientoFiguras
document.addEventListener("DOMContentLoaded", function () {
    const figures = document.querySelectorAll(".figure");

    figures.forEach(figure => {
        let initialX, initialY, startX, startY, isDragging = false;

        // trasPedirLaConfigInicialaGuardamos
        initialX = figure.offsetLeft;
        initialY = figure.offsetTop;

        figure.addEventListener("mousedown", function (e) {
            isDragging = true;
            startX = e.clientX - figure.offsetLeft;
            startY = e.clientY - figure.offsetTop;
            
            //paraEvitarLasTransicionesAlArrastrar
            figure.style.transition = "none"; 
        });

        // detectarLaPulsaciónDelRatón
        document.addEventListener("mousemove", function (e) {
            if (!isDragging) return;

            let newX = e.clientX - startX;
            let newY = e.clientY - startY;

            figure.style.left = `${newX}px`;
            figure.style.top = `${newY}px`;
        });

        // detectarElSoltarElRatón
        document.addEventListener("mouseup", function () {
            if (!isDragging) return;
            isDragging = false;

            figure.style.transition = "left 0.5s ease, top 0.5s ease";
            figure.style.left = `${initialX}px`;
            figure.style.top = `${initialY}px`;
        });
    });
});
