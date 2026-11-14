const boton = document.getElementById("saludo");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Funciona! Ya agregaste interacción con JavaScript.";
});
