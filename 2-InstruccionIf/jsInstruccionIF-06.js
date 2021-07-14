function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad > 17) {
    alert("Usted es adulto");
  } else {
    if (edad < 13) {
      alert("Usted es niño");
    } else {
      alert("Usted es adolescente");
    }
  }
} //FIN DE LA FUNCIÓN
