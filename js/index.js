datos.map((patriota) => {
  crearColumna(patriota);
});


function crearColumna(patriota) {
  let portada = document.getElementById("portada");
  portada.innerHTML += `
    <aside class="col-12 col-md-4 col-lg-3 mb-3 tarjeta">
    <div class="card container cardPatriota" >
      <img src="${patriota.imagen}" class="card-img-top w-100" alt="${patriota.nombre}">
      <div class="card-body text-center">
        <h5 class="card-title">${patriota.nombre}</h5>
        <h5 class="text-danger">${patriota.distrito}</h5>
        <a class="btn btn-primary" href="./pages/cv.html?codigo=${patriota.codigo}">Ver CV</a>
      </div>
    </div>
  </aside>
    `;
}

function detallePatriota(codigo) {
  console.log(codigo);
  console.log(window.location.href+ "" + codigo);
  window.location.href = window.location.href+"./pages/cv.html?codigo=" + codigo;
}



/*
datos.map((patriota) => {
  crearColumna(patriota);
});


function crearColumna(patriota) {
  let portada = document.getElementById("portada");
  portada.innerHTML += `
    <aside class="col-12 col-md-4 col-lg-3 mb-3 tarjeta">
    <div class="card container cardPatriota" >
      <img src="${patriota.imagen}" class="card-img-top w-100" alt="${patriota.nombre}">
      <div class="card-body text-center">
        <h5 class="card-title">${patriota.nombre}</h5>
        <h5 class="text-danger">${patriota.distrito}</h5>
        <button class="btn btn-primary" onclick="detallePatriota('${patriota.codigo}')">Ver CV</button>
      </div>
    </div>
  </aside>
    `;
}

function detallePatriota(codigo) {
  console.log(codigo);
  console.log(window.location.href+ "./pages/cv.html?codigo=" + codigo);
  window.location.href = window.location.href+"./pages/cv.html?codigo=" + codigo;
}

*/
