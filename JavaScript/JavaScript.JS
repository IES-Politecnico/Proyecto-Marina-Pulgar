function comprobacion () {
    if (document.formulario_registro.contrasena1.value == document.formulario_registro.rep_contrasena) {
        document.getElementById("con_coincidir").innerHTML = "Las contraseñas coinciden"
    }
    else {
        document.getElementById("con_coincidir").innerHTML = "Las contraseñas no coinciden"
    }
}