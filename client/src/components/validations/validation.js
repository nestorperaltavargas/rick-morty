/* Validations */
const validation = (userData) => {

    const errors = {};
    const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const pass = /.*\d+.*/;

    if(!emailRegx.test(userData.email)){
        errors.email = "El email ingresado no es válido"
    }
    if(!userData.email){
        errors.email = "Debe ingresar un email";
    }
    if(userData.email.lenght > 35){
        errors.email = "El email no debe ser mayor a 35 caracteres"
    }
    if(!pass.test(userData.password)){
        errors.password = "La contraseña debe contener al menos 1 número";
    }
    if(userData.password.lenght < 6 || userData.password.lenght > 10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
    }

    return errors;
}

export default validation;