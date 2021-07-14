function mostrar() {
  //tomo la edad

  let edad;

  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad <= 17 && edad >= 13) {
    alert("usted es adolescente");
  }

  // si la edad no esta fuera del rango de adolescente ---> es adolescente

  //If (!(edad <13 || edad >17))
  //{
  // alert("Es adolescente")
  //}
} //FIN DE LA FUNCIÓN
