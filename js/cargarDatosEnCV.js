const parametroCodigo = new URLSearchParams(window.location.search);


let patriotaBuscado = datos.find((patriota) => {
  return patriota.codigo === parametroCodigo.get("codigo");
});


let nombre = document.getElementById("nombre");
nombre.innerHTML = ` ${patriotaBuscado.nombre} `;
let imagen = document.getElementById("imagen");
imagen.setAttribute('src', patriotaBuscado.imagen) 
let profesion = document.getElementById("profesion");
profesion.innerHTML = `${patriotaBuscado.profesion} `;
let distrito = document.getElementById("distrito");
distrito.innerHTML = `${patriotaBuscado.distrito} `;
let nacionalidad = document.getElementById("nacionalidad");
nacionalidad.innerHTML = `${patriotaBuscado.nacionalidad} `;
let nacimiento = document.getElementById("nacimiento");
nacimiento.innerHTML = `${patriotaBuscado.nacimiento} `;
let fallecimiento = document.getElementById("fallecimiento");
fallecimiento.innerHTML = `${patriotaBuscado.fallecimiento} `;
let resumen = document.getElementById("resumen");
resumen.innerHTML = `${patriotaBuscado.resumen} `;
let habilidades = patriotaBuscado.habilidades.map((patriotaBuscado) => {
  crearLiHabilidades(patriotaBuscado);
});
let experiencia = patriotaBuscado.experiencia.map((patriotaBuscado) => {
  crearLiExperiencia(patriotaBuscado);
});
let educacion = patriotaBuscado.educacion.map((patriotaBuscado) => {
  crearLiEducacion(patriotaBuscado);
});
let aficiones = document.getElementById("aficiones");
aficiones.innerHTML = `${patriotaBuscado.aficiones} `;
let youtube = document.getElementById("youtube");
youtube.innerHTML = `<a id="youtube" href="${patriotaBuscado.youtube}" class="mx-1"><i class="fa-brands fa-youtube fs-4  mx-2"></i></a>`;
let wikipedia = document.getElementById("wikipedia");
wikipedia.innerHTML = `<a id="wikipedia"href="${patriotaBuscado.wikipedia}" class="mx-1"><i class="fa-brands fa-wikipedia-w fs-4  mx-2"></i></a>`;

function crearLiHabilidades(patriotaBuscado) {
  let habilidades = document.getElementById("habilidades");
  habilidades.innerHTML += `
    <li>${patriotaBuscado}</li>
    `;
}

function crearLiExperiencia(patriotaBuscado) {
  let experiencia = document.getElementById("experiencia");
  experiencia.innerHTML += `
    <li>${patriotaBuscado}</li>
    `;
}
function crearLiEducacion(patriotaBuscado) {
  let educacion = document.getElementById("educacion");
  educacion.innerHTML += `
    <li>${patriotaBuscado}</li>
    `;
}
