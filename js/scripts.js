const datos = {
    nombre: '',
    correo: '',
    sexo: '',
    interes: '',
    noticias: ''
}
// eventos de los input
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const sexo= document.querySelector('#sexo');
const interes = document.querySelector('#interes');
const noticias = document.querySelector('#noticias');


nombre.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
sexo.addEventListener('input', leerTexto);
interes.addEventListener('input', leerTexto);
noticias.addEventListener('input', leerTexto);

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
}

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //--- destructuring
    const {nombre, correo, sexo, interes, noticias} = datos;
    if(nombre === '' || correo === '' || sexo === '' || interes === ''){
        mostrarError('Diligencia todos los campos');
        return; //--- corta la ejecucion del codigo
    }
    mostrarMensaje("Datos enviados correctamente");
    function mostrarMensaje(mensaje){
        let alerta = document.createElement('p');
        alerta.textContent = mensaje;
        alerta.classList.add('correcto');
        formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 5000)
    }

    function mostrarError(mensaje){
        let error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('error');
        formulario.appendChild(error);
        setTimeout(() => {
            error.remove();
        }, 5000)
    }
        

})