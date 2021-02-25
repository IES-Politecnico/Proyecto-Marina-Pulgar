function comprobacion () {
    if (document.registro.contrasena1.value == document.registro.rep_contrasena.value) {
        document.getElementById("con_coincidir").innerHTML = "¡Las contraseñas coinciden!"
        document.getElementById("con_coincidir").style.color = "#00ff00"
    }
    else {
 
        document.getElementById("con_coincidir").innerHTML = "¡Las contraseñas no coinciden!"
        document.getElementById("con_coincidir").style.color  = "#ff0000"
    }
}
