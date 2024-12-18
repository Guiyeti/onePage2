
gsap.registerPlugin(Flip);

//  Barra de navegacion responsive
let menu = document.querySelector(".menu");
menu.onclick = function () {
    let navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active");

    let icono = document.querySelector(".menu img");

    if (navBar.classList.contains('active')) {
        icono.src = 'img/cerrar.png';
        icono.classList.add('cerrar');
    } else {
        icono.src = 'img/menu.png';
        icono.classList.remove('cerrar');
    }


}

// animacion enlaces barra de navegacion

let links = document.querySelectorAll(".nav-item a");
let activeNav = document.querySelector(".active-nav");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        gsap.to(links, { color: "#FFFFFF" });
        if (document.activeElement === link) {
            gsap.to(link, { color: "#ffff51" });

        }

        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 1.5,
            absolute: true,
            ease: "elastic.out(1,0.5)"
        })
    })
})


// Animación Lottie

let player = document.getElementById("cohete_animacion");

player.addEventListener("ready", () => {
    LottieInteractivity.create({
        mode: "scroll",
        player: "#cohete_animacion",
        actions: [
            {
                visibility: [0, 1.0],
                type: "seek",
                frames: [0, 250],
            },
        ]
    });
});


// Formulario pop-up

document.querySelectorAll(".show-login").forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
    });
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});


// Tecnologias Utilizadas animacion

const scrollers = document.querySelectorAll(".nombreTecnologias");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        // agrega data-animated="true" a .nombreTecnologias
        scroller.setAttribute("data-animated", true);

        const scrolList = scroller.querySelector(".scroll_");
        // Crea un array con los elementos del div
        const scrollerContenido = Array.from(scrolList.children);

        // Duplica los items del array creado para que la transisión sea mas suave

        scrollerContenido.forEach((item) => {
            const itemDuplicado = item.cloneNode(true);
            itemDuplicado.setAttribute("aria-hidden", true);
            scrolList.appendChild(itemDuplicado);
        });
    });
}


// Animación on scroll para el apartado tenerCuenta y convencido

window.addEventListener('scroll', function () {
    let mostrarElementos = document.querySelectorAll('#tenerCuenta1, #tenerCuenta2, #tenerCuenta3,#convencido');
    mostrarElementos.forEach(function (elemento) {
        if (verElemento(elemento)) {
            elemento.classList.add('show');
        } else {
            elemento.classList.remove('show');
        }
    });
});


function verElemento(e) {
    var rect = e.
        getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animación on scroll para el apartado opiniones y asi despegaras


const observer = new IntersectionObserver((entri) => {
    entri.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        } else {
            entry.target.classList.remove('show')
        }
    })
})

const opiniones = document.querySelectorAll('#opinion1, #opinion2, #opinion3, #opinion4');
const hiddenElements = document.querySelectorAll('#despegaras1, #despegaras2, #despegaras3');
hiddenElements.forEach((e) => observer.observe((e)))
opiniones.forEach((e) => observer.observe((e)))