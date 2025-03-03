// proibirBajarConLoDelArray
    let bloqueados = ["wheel", "keydown", "keyup"];

    bloqueados.forEach(bloqueados => {
        document.addEventListener(bloqueados, function (event) {
            event.preventDefault();
        }, {passive: true});
    });

// proibirZoom con Ctrl + Scroll y Ctrl + (+, -, 0)
// loTengoActivoDemomento
    document.addEventListener("wheel", function (event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, {passive: true});

    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "0")) {
            event.preventDefault();
        }
    }, { passive: true });

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
            /*initialX = figure.offsetLeft;
            initialY = figure.offsetTop; */
        // porPorcentajes - adaptacionCualquierPantalla
        initialX = (figure.offsetLeft / window.innerWidth) * 100;
        initialY = (figure.offsetTop / window.innerHeight) * 100;
        
        figure.addEventListener("mousedown", function (e) {
            isDragging = true;
            startX = e.clientX - figure.offsetLeft;
            startY = e.clientY - figure.offsetTop;
            
            //paraEvitarLasTransicionesAlArrastrar
            figure.style.transition = "none"; 
            figure.style.animation = "none";
        });
        
        // detectarLaPulsaciónDelRatón
        document.addEventListener("mousemove", function (e) {
            if (!isDragging) return;
            
            /* let newX = e.clientX - startX;
            let newY = e.clientY - startY; */
            let newX = ((e.clientX - startX) / window.innerWidth) * 100;
            let newY = ((e.clientY - startY) / window.innerHeight) * 100;
            
            figure.style.left = `${newX}%`;
            figure.style.top = `${newY}%`;
            //figure.style.transform = `translate(${newX}px, ${newY}px)`; problema1
        });
        
        // detectarElSoltarElRatón
        document.addEventListener("mouseup", function () {
            if (!isDragging) return;
            isDragging = false;
            
            figure.style.animation = "float 3s ease-in-out infinite";
            figure.style.transition = "left 0.5s ease, top 0.5s ease";

            figure.style.left = `${initialX}%`;
            figure.style.top = `${initialY}%`;
        });
        
        // detectarDobleClick
        document.addEventListener("dblclick", function() {
            figure.style.transition = "left 0.5s ease, top 0.5s ease";
            figure.style.left = `${initialX}%`;
            figure.style.top = `${initialY}%`;
        });
    });
});

// desactivarSeleccionTexto
document.addEventListener("selectstart", function(ba) {
    const selec = document.querySelectorAll('.texto');
    selec.forEach(texto => {
        texto.style.querySelectorAll = "none";
    });
    ba.preventDefault();
});
// recargaContadorVueltas
window.onload = function () {
    window.scrollTo(0, 0);
};

// barridoElementos
let isScrollingDown = false;
let lastScrollTop = 0;
const elementos = document.querySelectorAll(".fondo, .image, .figure, .recText");

// devanecerElementos
function desvanecerElementos() {
    elementos.forEach((elemento, index) => {
        setTimeout(() => {
            elemento.classList.add("desvanecido");
        }, index * 200);
    });

    setTimeout(() => {
        document.body.classList.add("cambiar-fondo");
    }, elementos.length * 30 + 100);
};

// aparecerElementos
function reaparecerElementos() {
    elementos.forEach((elemento, index) => {
        setTimeout(() => {
            elemento.classList.remove("desvanecido");
        }, index);
});

    document.body.classList.remove("cambiar-fondo");
    document.body.style.backgroundColor = "transparent";
};

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        if (!isScrollingDown) {
            isScrollingDown = true;
            desvanecerElementos();
        }
    } else {
        if (isScrollingDown) {
            isScrollingDown = false;
            reaparecerElementos();
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});