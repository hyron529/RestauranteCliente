$(document).ready(function() {
    $('#siguiente').click(function(e) {
        e.preventDefault();
        $('#reserva-section').find('form > *').hide(); 
        $('#campos-adicionales').show();
        $('#volver').show();
        $('#confirmar').show();
    });

    $('#volver').click(function(e) {
        e.preventDefault();
        $('#reserva-section').find('form > *').show();
        $('#campos-adicionales').hide(); 
        $('#volver').hide();
        $('#confirmar').hide();
    });
});



$(document).ready(function() {
    $('#siguiente').click(function(e) {
        e.preventDefault();
        $('#reserva-section').find('form > *').hide();
        $('#campos-adicionales').show();
        $('#volver').show();
        $('#confirmar').show();
    });

    $('#volver').click(function(e) {
        e.preventDefault();
        $('#reserva-section').find('form > *').show();
        $('#campos-adicionales').hide();
        $('#volver').hide();
        $('#confirmar').hide();
    });

    $('#confirmar').click(function(e) {
        e.preventDefault();
        $('#confirmacionModal').modal('show');
    });

    $('#confirmarCompra').click(function() {
        alert('¡Compra confirmada!');
        $('#confirmacionModal').modal('hide');
    });
});



$(document).ready(function() {
    let pasoActual = 1;
    actualizarProgreso();

    $('#siguiente').click(function(e) {
        e.preventDefault();
        $('#datos-personales').hide(); 
        $('#campos-adicionales').show(); 
        avanzarPaso(); 
        $('#siguiente').hide(); 
        $('#volver').show(); 
        $('#confirmar').show(); 
    });

    $('#volver').click(function(e) {
        e.preventDefault();
        $('#datos-personales').show(); 
        $('#campos-adicionales').hide(); 
        retrocederPaso(); 
        $('#siguiente').show(); 
        $('#volver').hide(); 
        $('#confirmar').hide(); 
    });


    $('#confirmar').click(function(e) {
        e.preventDefault();

        completarProgreso();
    });

    
    $('#cancelar').click(function(e) {
        e.preventDefault();
        retrocederPaso(); 
    });

    function avanzarPaso() {
        pasoActual++;
        actualizarProgreso();
    }

    function retrocederPaso() {
        pasoActual--;
        actualizarProgreso();
    }

    function completarProgreso() {
        pasoActual = 3; 
        actualizarProgreso();
    }

    function actualizarProgreso() {
        let totalPasos = 3;
        let progreso = (pasoActual / totalPasos) * 100;
        $('.progress-bar').css('width', progreso + '%');
    }
});


//feedback
$(document).ready(function() {
    $('#nombre').on('input', function() {
        let nombre = $(this).val();
        let valido = /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(nombre.trim());
        mostrarValidacion($(this), valido);
    });

    $('#email').on('input', function() {
        let email = $(this).val();
        let valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
        mostrarValidacion($(this), valido);
    });

    $('#telefono').on('input', function() {
        let telefono = $(this).val();
        let valido = /^\d{9}$/.test(telefono.trim());
        mostrarValidacion($(this), valido);
    });

    $('#fecha').on('input', function() {
        let fecha = $(this).val();
        let valido = !isNaN(Date.parse(fecha.trim()));
        mostrarValidacion($(this), valido);
    });

    $('#hora').on('input', function() {
        let hora = $(this).val();
        let valido = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(hora.trim());
        mostrarValidacion($(this), valido);
    });

    $('#personas').on('input', function() {
        let personas = $(this).val();
        let valido = /^\d+$/.test(personas.trim());
        mostrarValidacion($(this), valido);
    });

    $('#numero-tarjeta').on('input', function() {
        let numeroTarjeta = $(this).val();
        let valido = /^\d{12}$/.test(numeroTarjeta.trim());
        mostrarValidacion($(this), valido);
    });

    $('#fecha-caducidad').on('input', function() {
        let fechaCaducidad = $(this).val();
        let valido = !isNaN(Date.parse(fechaCaducidad.trim()));
        mostrarValidacion($(this), valido);
    });

    $('#cvv').on('input', function() {
        let cvv = $(this).val();
        let valido = /^\d{3}$/.test(cvv.trim());
        mostrarValidacion($(this), valido);
    });
});

function mostrarValidacion(campo, valido) {
    if (valido) {
        campo.removeClass('is-invalid').addClass('is-valid');
        campo.next('.valid-feedback').show().text('Formato válido');
        campo.next('.invalid-feedback').hide();
    } else {
        campo.removeClass('is-valid').addClass('is-invalid');
        campo.next('.valid-feedback').hide();
        campo.next('.invalid-feedback').show().text('Formato inválido');
    }
}






















