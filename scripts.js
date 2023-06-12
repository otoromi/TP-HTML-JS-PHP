console.log("eventos");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

console.log(nombre.value.length);

function validarNombre() {
    if(nombre.value.length<3){
        document.getElementById("errorNombre").innerHTML = "El nombre no es válido";
    } else {
        document.getElementById("errorNombre").innerHTML = "El nombre es correcto";
    }
}

function validarApellido() {
    if(apellido.value.length<3){
        document.getElementById("errorApellido").innerHTML = "El apellido no es válido";
    } else {
        document.getElementById("errorApellido").innerHTML = "El apellido es correcto";
    }
}

function validarEmail() {
    if(!expRegular.test(email.value)){
        document.getElementById("errorEmail").innerHTML = "El email no es válido"
    } else {
        document.getElementById("errorEmail").innerHTML = "El email es correcto"
    }
}

function borrarFormulario() {
    document.getElementById('nombre').value = document.getElementById("nombre").ariaPlaceholder;
    document.getElementById('apellido').value = document.getElementById("apellido").ariaPlaceholder;
    document.getElementById('email').value = document.getElementById("email").ariaPlaceholder;
    document.getElementById('cantidadEntradas').value = document.getElementById("cantidadEntradas").ariaPlaceholder;
    document.getElementById('importeTotal').innerHTML = document.getElementById("importeTotal").ariaPlaceholder;
  }

  function totalEntradas() {
   
    cantidadEntradas = document.getElementById('cantidadEntradas').value;
    categoria = document.getElementById('catDescuento').value;
  
    general = 200;
    entradaEstudiante = general*0.2;
    entradaTrainee = general*0.5;
    entradaJr = general*0.85;
  
    if (cantidadEntradas > 0 && cantidadEntradas % 1 == 0) {
      
      if (categoria == '1') {
        total = general * cantidadEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: $ ' + total;
      } else if (categoria == '2') {
        total = entradaEstudiante * cantidadEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: $ ' + total;
      } else if (categoria == '3') {
        total = entradaTrainee * cantidadEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: $ ' + total;
      } else if (categoria == '4') {
        total = entradaJr * cantidadEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: $ ' + total;
      }
    } else {
      window.alert('Ingrese un número entero de entradas');
    }
  }

botonResumen.addEventListener("click", validarNombre);
botonResumen.addEventListener("click", validarApellido);
botonResumen.addEventListener("click", validarEmail);