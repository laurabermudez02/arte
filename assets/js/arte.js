const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const confirmContraseña = document.getElementById('confirmContraseña');
const fechaInput = document.getElementById('date');
const formulario = document.getElementById('formulario');
const mensajeExito = document.getElementById('Exito');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let nombreCorrecto = verificarNombre();
    let apellidoCorrecto = verificarApellido();
    let correoCorrecto = verificarCorreo();
    let contraseñaCorrecto = verificarContraseña();
    let confirmacionContraseñaCorrecta = verificarConfirmacionContraseña();
    let fechaInputCorrecta = verificarFechaInput();


    if (nombreCorrecto && apellidoCorrecto && correoCorrecto && contraseñaCorrecto && confirmacionContraseñaCorrecta && fechaInputCorrecta) {
        mensajeExito.style.display = 'block';
    } else {
        mensajeExito.style.display = 'none';
    }
});

nombre.addEventListener('input', verificarNombre);
apellido.addEventListener('input', verificarApellido);
correo.addEventListener('input', verificarCorreo);
contraseña.addEventListener('input', verificarContraseña);
confirmContraseña.addEventListener('input', verificarConfirmacionContraseña);
fechaInput.addEventListener('input', verificarFechaInput);

function verificarNombre() {
    const nombreValor = nombre.value.trim();
    if (nombreValor === '') {
        mostrarError(nombre, 'Este campo es obligatorio');
        return false;
    } else {
        mostrarExito(nombre);
        return true;
    }
}

function verificarApellido() {
    const apellidoValor = apellido.value.trim();
    if (apellidoValor === '') {
        mostrarError(apellido, 'Este campo es obligatorio');
        return false;
    } else {
        mostrarExito(apellido);
        return true;
    }
}

function verificarCorreo() {
    const correoValor = correo.value.trim();
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correoValor === '') {
        mostrarError(correo, 'El correo es obligatorio');
        return false;
    } else if (!regexCorreo.test(correoValor)) {
        mostrarError(correo, 'El correo no es válido');
        return false;
    } else {
        mostrarExito(correo);
        return true;
    }
}

function verificarContraseña() {
    const contraseñaValor = contraseña.value.trim();
    if (contraseñaValor.length < 8) {
        mostrarError(contraseña, 'La contraseña debe tener al menos 8 caracteres');
        return false;
    } else {
        mostrarExito(contraseña);
        return true;
    }
}

function verificarConfirmacionContraseña() {
    const confirmContraseñaValor = confirmContraseña.value.trim();
    if (confirmContraseñaValor !== contraseña.value.trim()) {
        mostrarError(confirmContraseña, 'Las contraseñas no coinciden');
        return false;
    } else {
        mostrarExito(confirmContraseña);
        return true;
    }
}

function verificarFechaInput() {
    const fechaInputValor = fechaInput.value.trim();
    if (fechaInputValor === '') {
        mostrarError(fechaInput, 'Es necesario ingresar su fecha de nacimiento');
        return false;
    } else {
        mostrarExito(fechaInput);
        return true;
    }
}

function mostrarError(campo, mensaje) {
    const formControl = campo.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.textContent = mensaje;
}

function mostrarExito(campo) {
    const formControl = campo.parentElement;
    formControl.className = 'form-control success';
}
