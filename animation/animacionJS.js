const resultadoJS = document.querySelector(".resultado.javascript");
gsap.to(resultadoJS, {
  duration: 1 /* duracion de la animacion en segundos */,
  y: 100, // Desplazamiento vertical en píxeles
  opacity: 1, // Opacidad final del elemento (1 significa completamente visible)
  ease: "power2.out", // Tipo de animación (puedes ver más opciones en la documentación de TweenMax)
});
