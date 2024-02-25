$(document).ready(function() {
    let pasoActual = 1;
    actualizarProgreso();

    $(document).ready(function() {
        let pasoActual = 1;
        actualizarProgreso();
    
        $('#siguiente').click(function(e) {
            e.preventDefault();
            if (pasoActual === 1) {
                if (validarDatosPersonales()) {
                    $('#datos-personales').hide();
                    $('#campos-adicionales').show();
                    avanzarPaso();
                    $('#siguiente').hide();
                    $('#volver').show();
                    $('#confirmar').show();
                }
            } else if (pasoActual === 2) {
                if (validarDatosBancarios()) {
                    $('#datos-bancarios').hide();
                    completarProgreso();
                }
            }
        });
        
        $('#volver').click(function(e) {
            e.preventDefault();
            if (pasoActual === 2) {
                $('#campos-adicionales').hide(); 
                $('#siguiente').show();
                $('#confirmar').hide();
            }
            $('#datos-personales').show();
            retrocederPaso();
            $('#volver').hide();
        });
        
    
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
        if (pasoActual === 2) {
            if (validarDatosBancarios()) {
                $('#confirmacionModal').modal('show');
                completarProgreso();
            } else {
                validarDatosBancarios();
            }
        }
    });
    

    $('#confirmarCompra').click(function() {
        alert('¡Compra confirmada!');
        $('#confirmacionModal').modal('hide');
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

    function validarDatosPersonales() {
        let nombre = $('#nombre').val();
        let email = $('#email').val();
        let telefono = $('#telefono').val();
        let fecha = $('#fecha').val();
        let hora = $('#hora').val();
        let personas = $('#personas').val();
    
        if (!nombre.match(/[A-Za-zÁÉÍÓÚáéíóú\s]+/)) {
            $('#nombre').addClass('is-invalid');
            return false;
        } else {
            $('#nombre').removeClass('is-invalid').addClass('is-valid');
        }
    
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            $('#email').addClass('is-invalid');
            return false;
        } else {
            $('#email').removeClass('is-invalid').addClass('is-valid');
        }
    
        if (!telefono.match(/^\d{9}$/)) {
            $('#telefono').addClass('is-invalid');
            return false;
        } else {
            $('#telefono').removeClass('is-invalid').addClass('is-valid');
        }
    
        if (!fecha) {
            $('#fecha').addClass('is-invalid');
            return false;
        } else {
            $('#fecha').removeClass('is-invalid').addClass('is-valid');
        }
    
        if (!hora) {
            $('#hora').addClass('is-invalid');
            return false;
        } else {
            $('#hora').removeClass('is-invalid').addClass('is-valid');
        }
    
        if (personas < 1 || isNaN(personas)) {
            $('#personas').addClass('is-invalid');
            return false;
        } else {
            $('#personas').removeClass('is-invalid').addClass('is-valid');
        }
    
        return true;
    }
    

    function validarDatosBancarios() {
        let numeroTarjeta = $('#numero-tarjeta').val();
        let fechaCaducidad = $('#fecha-caducidad').val();
        let cvv = $('#cvv').val();
    
        let numeroTarjetaValido = numeroTarjeta.match(/^\d{16}$/);
        let cvvValido = cvv.match(/^\d{3}$/);
    
        if (!numeroTarjetaValido) {
            $('#numero-tarjeta').addClass('is-invalid');
        } else {
            $('#numero-tarjeta').removeClass('is-invalid').addClass('is-valid');
        }
    
        if (!fechaCaducidad) {
            $('#fecha-caducidad').addClass('is-invalid');
        } else {
            $('#fecha-caducidad').removeClass('is-invalid').addClass('is-valid');
        }
    
        if (!cvvValido) {
            $('#cvv').addClass('is-invalid');
        } else {
            $('#cvv').removeClass('is-invalid').addClass('is-valid');
        }
    
        return numeroTarjetaValido && cvvValido && fechaCaducidad;
    }
    
    
});






























