function funcionMenu() {
    document.getElementById("mnu1").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.despMnu')) {
        var desplegable = document.getElementsByClassName("mnu2");
        var i;
        for (i = 0; i < desplegable.length; i++) {
            var abrirDesplegable = desplegable[1];
            if (abrirDesplegable.classList.contains('show')) {
                abrirDesplegable.classList.remove('show');
            }
        }
    }
}



/* seleccion de color de fondo */
function cambiarColor(color) {
    document.body.style.background = color;
}

/* sellecion de color de letras */
function cambiarColorLetras(color) {
    let b1 = document.getElementsByClassName("w1")[0]; 
    if (b1) {
        b1.style.color = color;
    }
}

/* seleccion de tamaño de letras */
function cambiarTamañoLetras(tamaño) {
    let b1 = document.getElementsByClassName("w1")[0]; // Selecciona el primer div con la clase "w1"
    if (b1) {
        b1.style.fontSize = tamaño;
    }
}

/* seleccion de tipo de letra */
function cambiarTipoLetra(tipo) {
    let b1 = document.getElementsByClassName("w1")[0]; // Selecciona el primer div con la clase "w1"
    if (b1) {
        b1.style.fontFamily = tipo;
    }
}