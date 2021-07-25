// variables
const btnEnviar = document.querySelector('#enviar'),
        email = document.querySelector('#email'),
        asunto = document.querySelector('#asunto'),
        mensaje = document.querySelector('#mensaje');



// funciones

const eventos = ()=>{
    document.addEventListener('DOMContentLoaded', iniciarApp);

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}

const iniciarApp = ()=>{
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}


const validarFormulario = e=>{
    if(e.target.value.length > 0){
        e.target.classList.add('border','border-green-500');
        e.target.classList.remove('border','border-red-500');
    }else{
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500');
    }

}

eventos();

