let aleatorio = document.getElementById("aleatorio");

function patriotaAleatorio() {
  let patriotaAleatorio = datos[Math.floor(Math.random() * datos.length)];

  aleatorio.innerHTML += `
            <div class="card cardCarousel mb-3">
               <div  class="row">
                   <div class="col-4">
                    <img src="${patriotaAleatorio.imagen}" class=" img-fluid rounded-start" alt="${patriotaAleatorio.nombre}" />
                   </div>
                   <div class="col-8">
                     <div class="card-body">
                        <h5 class="card-title">Patriota al azar: <span  class="text-info">${patriotaAleatorio.nombre}</span></h5>
                        <p class="card-text">${patriotaAleatorio.profesion} Diputado por el distrito de <span class="text-info"> ${patriotaAleatorio.distrito}.</span> </p>
                        <div class="text-center">
                        <a class="btn btn-success" onclick="detallePatriotaAleatorio('${patriotaAleatorio.codigo}')">Ver CV</a>
                        </div>
                      </div>                    
                  </div>
                </div>
              </div>
    `;
}


function detallePatriotaAleatorio(codigo) {
  console.log(codigo);
  console.log(window.location.origin + "/pages/cv.html?codigo=" + codigo);
  window.location.href =
    window.location.origin + "/pages/cv.html?codigo=" + codigo;
}

/*

function patriotaAleatorio() {
let aleatorio = document.getElementById("aleatorio");
let patriotaAleatorio = datos[Math.floor(Math.random() * datos.length)];
aleatorio.innerHTML += `
<div class="row" >
<div class="col-4"> 
<img src="${patriotaAleatorio.imagen}" class="card-img-top w-50" alt="${patriotaAleatorio.nombre}">   
 
</div>    
<div class="col -8">
<h5 class="text-danger fs-2">${patriotaAleatorio.nombre}</h5>
<p>${patriotaAleatorio.profesion}</p>
<p>${patriotaAleatorio.resumen}</p>
<p> Diputado por el distrito de <span class="text-success fs-5"> ${patriotaAleatorio.distrito}</span></p>
<button class="btn btn-primary" onclick="detallePatriotaAleatorio('${patriotaAleatorio.codigo}')">Ver CV</button>
</div>
</div>
`;
}

*/

/*
 <img  id="imagenPatriotaAzar" src="${patriotaAleatorio.imagen}" class="rounded-start" alt="${patriotaAleatorio.nombre}" />

*/
