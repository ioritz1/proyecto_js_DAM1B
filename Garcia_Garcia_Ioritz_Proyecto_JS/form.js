function validarFormularioCustom() {
    // Validar que todos los campos sean completados
    let form = document.getElementById("registroFormCustom");
    let emailInput = document.getElementById("emailCustom");
    let emailError = document.getElementById("emailError");
    let emailCorrect = document.getElementById("emailCorrect");

    // Limpiar mensajes de error previos
    emailError.style.display = "none";
    emailCorrect.style.display = "none";

    // Validación de Email
    let emailValue = emailInput.value;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(emailValue)) {
        emailError.style.display = "block";
        emailError.innerHTML = `${emailValue} is not correct, please retry :(`;
    } else {
        emailCorrect.style.display = "block";
        emailCorrect.innerHTML = `${emailValue} is valid :)`;
    }

    // Verificar si el formulario es válido
    if (form.checkValidity() && emailRegex.test(emailValue)) {
        alert("Formulario validado correctamente.");
    } else {
        alert("Por favor, complete todos los campos requeridos.");
    }
}

function mostrarProvincia() {
    let country = document.getElementById("countryCustom").value;
    let provinceSelect = document.getElementById("provinceCustom");
    let townSelect = document.getElementById("townCustom");
    let provinceLabel = document.getElementById("provinceLabel");
    let townLabel = document.getElementById("townLabel");

    // Ocultar provincias y ciudades previamente seleccionadas
    provinceSelect.style.display = "none";
    provinceLabel.style.display = "none";
    townSelect.style.display = "none";
    townLabel.style.display = "none";
    
    // Limpiar opciones previas
    provinceSelect.innerHTML = '<option value="">Select your province</option>';
    townSelect.innerHTML = '<option value="">Select your town</option>';

    if (country === "usa") {
        provinceSelect.style.display = "block";
        provinceLabel.style.display = "block";
        provinceSelect.innerHTML += '<option value="california">California</option><option value="texas">Texas</option>';
    } else if (country === "canada") {
        provinceSelect.style.display = "block";
        provinceLabel.style.display = "block";
        provinceSelect.innerHTML += '<option value="ontario">Ontario</option><option value="britishColumbia">British Columbia</option>';
    } else if (country === "mexico") {
        provinceSelect.style.display = "block";
        provinceLabel.style.display = "block";
        provinceSelect.innerHTML += '<option value="jalisco">Jalisco</option><option value="cdmx">CDMX</option>';
    } else if (country === "spain") {
        provinceSelect.style.display = "block";
        provinceLabel.style.display = "block";
        provinceSelect.innerHTML += '<option value="madrid">Madrid</option><option value="barcelona">Barcelona</option>';
    }
}

function mostrarCiudad() {
    let province = document.getElementById("provinceCustom").value;
    let townSelect = document.getElementById("townCustom");
    let townLabel = document.getElementById("townLabel");

    // Ocultar la ciudad previamente seleccionada
    townSelect.style.display = "none";
    townLabel.style.display = "none";

    // Limpiar opciones previas
    townSelect.innerHTML = '<option value="">Select your town</option>';

    if (province === "california") {
        townSelect.style.display = "block";
        townLabel.style.display = "block";
        townSelect.innerHTML += '<option value="losAngeles">Los Angeles</option><option value="sanFrancisco">San Francisco</option>';
    } else if (province === "texas") {
        townSelect.style.display = "block";
        townLabel.style.display = "block";
        townSelect.innerHTML += '<option value="houston">Houston</option><option value="dallas">Dallas</option>';
    } else if (province === "ontario") {
        townSelect.style.display = "block";
        townLabel.style.display = "block";
        townSelect.innerHTML += '<option value="toronto">Toronto</option><option value="ottawa">Ottawa</option>';
    } else if (province === "britishColumbia") {
        townSelect.style.display = "block";
        townLabel.style.display = "block";
        townSelect.innerHTML += '<option value="vancouver">Vancouver</option><option value="victoria">Victoria</option>';
    } else if (province === "jalisco") {
        townSelect.style.display = "block";
        townLabel.style.display = "block";
        townSelect.innerHTML += '<option value="guadalajara">Guadalajara</option><option value="tequila">Tequila</option>';
    } else if (province === "cdmx") {
        townSelect.style.display = "block";
        townLabel.style.display = "block";
        townSelect.innerHTML += '<option value="mexicoCity">Mexico City</option><option value="xochimilco">Xochimilco</option>';
    } else if (province === "madrid") {
        townSelect.style.display = "block";
        townLabel.style.display = "block";
        townSelect.innerHTML += '<option value="madridCity">Madrid City</option><option value="toledo">Toledo</option>';
    } else if (province === "barcelona") {
        townSelect.style.display = "block";
        townLabel.style.display = "block";
        townSelect.innerHTML += '<option value="barcelonaCity">Barcelona City</option><option value="girona">Girona</option>';
    }
}

/*  No funciona
function jjg() {
    let colorActual = getComputedStyle(document.body).backgroundColor;
    
    if (colorActual === "rgb(0, 0, 0)") { // Si el fondo es negro
        document.body.style.backgroundColor = "white";
        document.getElementById("mode").innerHTML = "Light";
        document.getElementsByClassName("form-container-custom").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementsByClassName("form-container-custom").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementsByClassName("form-container-custom").style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
        document.getElementsByClassName("form-container-custom").style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    } else {
        document.body.style.backgroundColor = "black"; // Si el fondo es blanco
        document.getElementById("mode").innerHTML = "Dark";
        document.getElementsByClassName("form-container-custom").style.backgroundColor = "rgb(71, 71, 71)";
        document.getElementsByClassName("form-container-custom").style.backgroundColor = "rgb(71, 71, 71)";
        document.getElementsByClassName("form-container-custom").style.boxShadow = "none";
        document.getElementsByClassName("form-container-custom").style.boxShadow = "none";
    }
} */

    /* se utiliza el array xq getElementsByClassName devuelve mas de un elemento por lo que style no se aplica correctamente. */
    function jjg() {
        let colorActual = getComputedStyle(document.body).backgroundColor;
        let formContainers = document.getElementsByClassName("form-container-custom");
    
        if (colorActual === "rgb(0, 0, 0)") { // Si el fondo es negro
            document.body.style.backgroundColor = "white";
            document.getElementById("mode").innerHTML = "Light";
    
            for (let i = 0; i < formContainers.length; i++) {
                formContainers[i].style.backgroundColor = "rgb(255, 255, 255)";
                formContainers[i].style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
                formContainers[i].style.color = "black";
            }
        } else {
            document.body.style.backgroundColor = "black"; // Si el fondo es blanco
            document.getElementById("mode").innerHTML = "Dark";
    
            for (let i = 0; i < formContainers.length; i++) {
                formContainers[i].style.backgroundColor = "rgb(71, 71, 71)";
                formContainers[i].style.boxShadow = "none";
                formContainers[i].style.color = "white";
            }
        }
    }