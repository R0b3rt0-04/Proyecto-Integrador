const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


let  validationF = (obj) => {
    let problems = {}

    if (!regexEmail.test(obj.email)) problems.email = 'Introduce un email valido'
    if(obj.email === '' | obj.email.split('').includes(' ')) problems.email = 'El email no puede estar vacio'
    if (obj.email.length >= 36) problems.emaillong = 'el correo no puede tener mas de 35 caracteres' 
    if(obj.password.split('').map(n => n = Number(n)).map(e =>  e = String(e)).filter(a => a !== 'NaN').length === 0) problems.passwordN = 'La contraseña debe incluir numeros'
    if(obj.password.length <= 5) problems.passwordL = 'La contraseña debe terner entre 6 y 10 acarcteres'
    if(obj.password.length >= 11) problems.passwordL = 'La contraseña debe terner entre 6 y 10 acarcteres'
    
    return problems
}

export default validationF
