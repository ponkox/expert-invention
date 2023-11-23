// image switcher code

let miImage = document.querySelector("img");

miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/galletasfirefox.png") {
    miImage.setAttribute("src", "images/galleta2.jpg");
  } else {
    miImage.setAttribute("src", "images/galletasfirefox.png");
  }
};

// mensaje de bienvenida personnalizado

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt ("introduzca su nombre pendejo") ;
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre) ;
      miTitulo.innerHTML = "Galletas de verdad" , + miNombre;
    }
  
}
 
if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre") ;
  miTitulo.textContent = "Galletas de verdad," + nombreAlmacenado;
}

miBoton.onclick = function() {
  estableceNombreUsuario();
};

