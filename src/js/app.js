// variables
const btnEnviar = document.querySelector('#enviar'),
    email = document.querySelector('#email'),
    asunto = document.querySelector('#asunto'),
    mensaje = document.querySelector('#mensaje'),
    formulario = document.querySelector('#enviar-mail');
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const btnReset = document.querySelector('#resetBtn');


// funciones

const eventos = () => {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    formulario.addEventListener('submit', enviarEmail);
    btnReset.addEventListener('click', resetForm);
}

const iniciarApp = () => {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}


const validarFormulario = e => {

    const campo = e.target.parentElement.children[0].textContent;

    if (e.target.value.length > 0) {
        const error = document.querySelector('.errores');
        if (error != null) {
            error.remove();
        }

        e.target.classList.remove('border-red-500');
        e.target.classList.add('border-green-500');
        
    } else {

        e.target.classList.remove('border-green-500');
        e.target.classList.add('border-red-500');
        mostrarError(`El campo ${campo} es obligatorio `, 'true');

    }

    if (e.target.type == 'email') {
        // console.log(er.test(e.target.value))
        if (er.test(e.target.value) == false) {
            e.target.classList.remove('border-green-500');
            e.target.classList.add('border-red-500');
            mostrarError(`El campo ${campo} necesita ser un correo valido`, 'true');
        } else {
            e.target.classList.remove('border-red-500');
        }
    }

    if(er.test(email.value) && asunto.value !== "" && mensaje.value !== "" ){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
        
    }

}


const mostrarError = (mensaje, bool) => {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    console.log("hola")

    if (bool == 'true') {
        mensajeError.classList.remove('border', 'border-green-500', 'background-color-100', 'text-green-500', 'p-3', 'my-3', 'text-center');
        mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'my-3', 'text-center', 'errores');

    } else {
        mensajeError.classList.remove('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'my-3', 'text-center', 'errores');
        mensajeError.classList.add('border', 'border-green-500', 'background-color-100', 'text-green-500', 'p-3', 'my-3', 'text-center');

    }


    const errores = document.querySelectorAll('.errores');
    if (errores.length == 0)
        formulario.appendChild(mensajeError);
}

const enviarEmail = e =>{
    e.preventDefault();

    const spinner = document.querySelector('#spinner');

    spinner.style.display='flex';

    setTimeout(()=>{
        
        spinner.style.display='none';

        const parrafo = document.createElement('p');
        parrafo.textContent = "Mensaje enviado correctamente";
        parrafo.classList.add('text-center','my-10','p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        const bordes = document.querySelectorAll('.border-green-500');
        // console.log(bordes)
        bordes.forEach(border =>border.classList.remove('border-green-500'));
        const bordesRed = document.querySelectorAll('.border-red-500');
        bordesRed.forEach(border =>border.classList.remove('border-red-500'));
       
        formulario.insertBefore(parrafo,spinner);
        setTimeout(()=>{
            formulario.reset();
            parrafo.remove();
        },1000);
    },2000)

}

const resetForm = e =>{
    e.preventDefault();
    formulario.reset();
    const bordesGreen = document.querySelectorAll('.border-green-500');
    bordesGreen.forEach(border =>border.classList.remove('border-green-500'));

    const bordesRed = document.querySelectorAll('.border-red-500');
    bordesRed.forEach(border =>border.classList.remove('border-red-500'));
}

eventos();