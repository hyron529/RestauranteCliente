const inicioSection = document.getElementById("inicio-section");
const reservaSection = document.getElementById("reserva-section");
const nosotrosSection = document.getElementById("nosotros-section");

function mostrarReserva() {
    inicioSection.style.display = "none";
    reservaSection.style.display = "block";
    nosotrosSection.style.display = "none";
}

function mostrarInicio() {
    inicioSection.style.display = "block";
    reservaSection.style.display = "none";
    nosotrosSection.style.display = "none";
}

function mostrarNosotros() {
    inicioSection.style.display = "none";
    reservaSection.style.display = "none";
    nosotrosSection.style.display = "block";
}

window.onload = function() {
    mostrarInicio();
};

//MIGAS DE PAN
function manejarMovimientos() {
    const elementosClickeables = document.querySelectorAll('a[href^="#"]');
    elementosClickeables.forEach(elemento => {
        elemento.addEventListener('click', function(evento) {
            evento.preventDefault();

            const destino = this.getAttribute('href');

            actualizarMigasDePan(destino);

            document.querySelector(destino).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function actualizarMigasDePan(destino) {
    const migasDePan = document.getElementById('breadcrumbs');

    migasDePan.innerHTML = '';

    const inicio = document.createElement('a');
    inicio.textContent = 'Inicio';
    inicio.href = '#inicio-section';
    migasDePan.appendChild(inicio);

    const separador = document.createElement('span');
    separador.textContent = ' > ';
    migasDePan.appendChild(separador);

    const destinoActual = document.createElement('span');
    destinoActual.textContent = obtenerNombreSeccion(destino);
    migasDePan.appendChild(destinoActual);
}

function obtenerNombreSeccion(destino) {
    return destino.slice(1);
}

document.addEventListener('DOMContentLoaded', manejarMovimientos);



//Spinner
$(document).ready(function() {
    function mostrarSpinner() {
        $('#spinner-container').show();
        setTimeout(function() {
            $('#spinner-container').hide();
        
        }, 3000); 
    }


    $('#nosotros-link').click(function(e) {
        e.preventDefault();
        mostrarSpinner();
    });

    $('#reservas-link').click(function(e) {
        e.preventDefault();
        mostrarSpinner();
    });
});



//galeria
function mostrarGaleria() {
    document.getElementById('gallery-container').style.display = 'block';
}




// menu para móviles
function toggleMenu() {
    var menuWrapper = document.getElementById('menu-wrapper');
    if (menuWrapper.style.display === 'none' || menuWrapper.style.display === '') {
        menuWrapper.style.display = 'block';
    } else {
        menuWrapper.style.display = 'none';
    }
}






















