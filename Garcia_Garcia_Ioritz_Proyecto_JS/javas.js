/* Funcion que permite abrir y mostrar el menu desplegable de la barra de busqueda */
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

/* selecion de color de letras */
function cambiarColorLetras(color) {
    let b1 = document.getElementsByClassName("w1")[0]; // Selecciona el primer div con la clase "w1"
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

/* Funcion para poner el modo oscuro o claro segun el color de fondo actual */
/* la funcion de cambiar tamaño de letras interviene en la correcta ejecucion de esta otra (por la cara xD)
    function clrFondo() {
        let colorActual = getComputedStyle(document.body).backgroundColor;
        
        if (colorActual === "rgb(0, 0, 0)") { // Si el fondo es negro
            document.body.style.backgroundColor = "white";
        } else {
            document.body.style.backgroundColor = "black";
        }
    }
*/



/* JS del formulario */


/* JS de images */
/*
const imgManual = document.getElementById("img1")
        const imgAuto = document.getElementById("img2")
        let numManual = 1;
        let numAuto = 1;

        function cambiarImagen(){
        imgManual.src = `imagenes/${numManual}.jpg`;
        imgManual.style.height = "100px";
        imgManual.style.width = "100px";

        if (numManual == 5){
        numManual = 1;
        } else {
        numManual+=1;
        }

        }

        setInterval(() => {
        imgAuto.src = `imagenes/${numAuto}.jpg`;
        imgAuto.style.height = "100px";
        imgAuto.style.width = "100px";
        if (numAuto == 5){
        numAuto = 1;
        } else {
        numAuto+=1;
        }
        }, 100); */