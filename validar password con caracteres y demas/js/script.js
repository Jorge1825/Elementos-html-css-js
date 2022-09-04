let password = document.getElementById("pass");
let verpassword = document.getElementById("verpassword");


let minuscula = document.getElementById("minusculas");
let mayuscula = document.getElementById("mayusculas");
let numero = document.getElementById("numero");
let chaespecial = document.getElementById("especial");
let longitud = document.getElementById("longitud");

//ver password

verpassword.onclick = function() {
    if(password.type == "password") {
        password.type = "text";
        verpassword.classList.add("hide");
    }else{
        password.type = "password";
        verpassword.classList.remove("hide");

    }
    }    


//validar password

function validarPassword(pass){
    const minuscula2 = new RegExp('(?=.*[a-z])');
    const mayuscula2 = new RegExp('(?=.*[A-Z])');
    const numero2 = new RegExp('(?=.*[0-9])');
    const chaespecial2 = new RegExp('(?=.*[!@#\$%\^&\*])');
    const longitud2 = new RegExp('(?=.{8,})');


    //validar minuscula
    minuscula2.test(pass) ? minuscula.classList.add("valido") : minuscula.classList.remove("valido");

    //validar mayuscula
    mayuscula2.test(pass) ? mayuscula.classList.add("valido") : mayuscula.classList.remove("valido");

    //validar numero
    numero2.test(pass) ? numero.classList.add("valido") : numero.classList.remove("valido");

    //validar chaespecial
    chaespecial2.test(pass) ? chaespecial.classList.add("valido") : chaespecial.classList.remove("valido");

    //validar longitud
    longitud2.test(pass) ? longitud.classList.add("valido") : longitud.classList.remove("valido");

}
