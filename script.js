$(document).ready (function() {

    

// Efecto de desplazamiento suave para los links de la navbar

$('.nav-link').click(function(e) {
    // Verificamos que el enlace tenga un destino (un ID)
    if (this.hash !== "") {
        e.preventDefault(); // Evita el salto brusco
        
        let destino = this.hash;
        // Calculamos la posición restando la altura de la navbar (aprox 70px)
        let posicion = $(destino).offset().top - 70;
// Animamos el movimiento del cuerpo de la página
        $('html, body').stop().animate({
            scrollTop: posicion
        }, 800, 'swing'); // milisegundos y el 'swing' hace que el final sea más suave
    }
});




// 2. CAMBIO DE TEMA (CLARO/OSCURO)
$('#btn-tema').click(function() {
    // Alternamos el fondo oscuro y texto blanco en el cuerpo
    $('body').toggleClass('bg-dark text-white');
     // ToggleClass cambia la clase: si no la tiene la pone, si la tiene la quita
        // body es el cuerpo de la pagina, seleccionamos todo el cuerpo
    
    if ($('body').hasClass('bg-dark')) {
        // --- CONFIGURACIÓN MODO OSCURO ---
        $(this).text('Modo Claro').removeClass('btn-outline-dark').addClass('btn-outline-light');
        
        // Ajuste para que la sección Habilidades no se vea blanca
        $('#Habilidades').removeClass('bg-light').css('background-color', '#2b3035');
        
        // Ajuste para que las tarjetas (cards) se vean oscuras
        $('.card').addClass('bg-dark text-white border-secondary');

    } else {
        // --- CONFIGURACIÓN MODO CLARO ---
        $(this).text('Modo Oscuro').removeClass('btn-outline-light').addClass('btn-outline-dark');
        
        // Devolvemos el fondo gris clarito original de Bootstrap a la sección
        $('#Habilidades').addClass('bg-light').css('background-color', '');
        
        // Devolvemos las tarjetas a su estado original (blancas)
        $('.card').removeClass('bg-dark text-white border-secondary');
    }
});

// termina cambio de tema claro oscuro


// Validación en tiempo real
$('#validacion1').on('input', function() {
    
    // 2. Guardamos lo que escribió el usuario
    let Nombre = $(this).val(); 
    
    // 3. Aplicamos la lógica (¿Tiene al menos 1 letra?)
    if (Nombre.length > 0) {
        // ÉXITO: Ponemos verde, quitamos rojo
        $(this).addClass('is-valid').removeClass('is-invalid');
    } else {
        // ERROR: Ponemos rojo, quitamos verde
        $(this).addClass('is-invalid').removeClass('is-valid');
    }
});

$('#validacion2').on('input', function(){

    let apellido=$(this).val();

    if (apellido.length>4) {
        $(this).addClass('is-valid').removeClass('is-invalid');
        
    } else {
        $(this).addClass('is-invalid').removeClass('is-valid');
        
    }


});

$('#validacion3').on('input', function(){

    let correo=$(this).val();

    if (correo.length>4&& correo.includes('@')) {
        $(this).addClass('is-valid').removeClass('is-invalid');
        
    } else {
        $(this).addClass('is-invalid').removeClass('is-valid');
        
    }


});
});