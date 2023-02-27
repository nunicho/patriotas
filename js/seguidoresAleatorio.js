let seguidoresParrafoContenedor = document.getElementById(
  "seguidoresParrafoContenedor"
);

const consultarAPI = async () => {
  let spinner = `<div class="spinner">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div>`
document.getElementById("seguidoresParrafoContenedor").innerHTML = spinner;
  try {
    const respuesta = await fetch("https://randomuser.me/api/");
    const dato = await respuesta.json();
    document.getElementById("seguidoresParrafoContenedor").innerHTML = `
          <div class="text-center"> 
          <p>
          <span>${dato.results[0].name.first}</span>
          <span>${dato.results[0].name.last} </span>, de la ciudad de
          <span>${dato.results[0].location.city} </span>.
          </p>
          <h5>${dato.results[0].location.country} </h5>
          
            <div>
            <img id="seguidorImagen" src="${dato.results[0].picture.medium}" alt="seguidor" class="border border-1 rounded border-light" /> </div>
            
          </div> `;
  } catch (error) {
    alert("No se pudo cargar la API");
  }
};

consultarAPI();






/*
let seguidoresParrafoContenedor = document.getElementById(
  "seguidoresParrafoContenedor"
);
let seguidorIntro = document.getElementById("seguidorIntro");
let seguidorNombre = document.getElementById("seguidorNombre");
let seguidorApellido = document.getElementById("seguidorApellido");
let seguidorCiudad = document.getElementById("seguidorCiudad");
let seguidorEstado = document.getElementById("seguidorEstado");
let seguidorPais = document.getElementById("seguidorPais");
let seguidorImagen = document.getElementById("seguidorImagen");

var consultarAPI = async () => {
  try {
    const respuesta = await fetch("https://randomuser.me/api/");
    const dato = await respuesta.json();
    seguidorNombre.innerHTML = dato.results[0].name.first;
    seguidorApellido.innerHTML = dato.results[0].name.last;
    seguidorCiudad.innerHTML = dato.results[0].location.city;
    seguidorEstado.innerHTML = dato.results[0].location.state;
    seguidorPais.innerHTML = dato.results[0].location.country;
    seguidorImagen.setAttribute("src", dato.results[0].picture.medium);
  } catch (error) {
    alert("No se pudo cargar la API");
  }
};

consultarAPI();


*/
