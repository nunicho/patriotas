datosMios = datosMauricio[1]

function cargarDatosMauricio() {

  let nombre = document.getElementById("nombre");
  nombre.innerHTML = ` ${datosMios.nombre} `;
  let imagen = document.getElementById("imagen");
  imagen.setAttribute('src', datosMios.imagen) 
  let profesion = document.getElementById("profesion");
  profesion.innerHTML = `${datosMios.profesion} `;
  let nacionalidad = document.getElementById("nacionalidad");
  nacionalidad.innerHTML = `${datosMios.nacionalidad} `;
  let nacimiento = document.getElementById("nacimiento");
  nacimiento.innerHTML = `${datosMios.nacimiento} `;
  let edad = document.getElementById("edad");
  edad.innerHTML = obtenerEdad();
  let mail = document.getElementById("mail");
  mail.innerHTML = `${datosMios.mail} `;
  let resumen = document.getElementById("resumen");
  resumen.innerHTML = `${datosMios.resumen} `;
  
  let habilidades = datosMios.habilidades.map((mauricio) => {
    crearLiHabilidades(mauricio);
  });
  let experiencia = datosMios.experiencia.map((mauricio) => {
    crearLiExperiencia(mauricio);
  });
  let educacion = datosMios.educacion.map((mauricio) => {
    crearLiEducacion(mauricio);
  });
  let aficiones = document.getElementById("aficiones");
  aficiones.innerHTML = `${datosMios.aficiones} `;
  let linkedin = document.getElementById("linkedin");
  linkedin.innerHTML = `<a id="linkedin"href="${datosMios.linkedin}" class="mx-1"><i class="bi bi-linkedin fs-4  mx-2"></i></a>`;

}

cargarDatosMauricio(); 


function crearLiHabilidades(mauricio) {
  let habilidades = document.getElementById("habilidades");
  habilidades.innerHTML += `
    <li>${mauricio}</li>
    `;
}


function crearLiExperiencia(mauricio) {
  let experiencia = document.getElementById("experiencia");
  experiencia.innerHTML += `
    <li>${mauricio}</li>
    `;
}
function crearLiEducacion(mauricio) {
  let educacion = document.getElementById("educacion");
  educacion.innerHTML += `
    <li>${mauricio}</li>
    `;
}

function obtenerEdad() {
  let hoy = new Date();
  let fechaNacimiento = new Date(datosMios.nacimiento);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let m = hoy.getMonth() - fechaNacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }
  return edad;
}