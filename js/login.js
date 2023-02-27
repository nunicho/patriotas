function cargarLocalStorage() {
  let botonLoginLogout = document.getElementById("botonLoginLogout");
  let contenidoLogin = document.getElementById("contenidoLogin");
  let saludos = [
    "Saludos",
    "Hola",
    "Cómo estás",
    "Aló",
    "Buenas y santas",
  ];
  let saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];
  let name = localStorage.getItem("loginPatriota");
  if (name != undefined || name != null) {
    botonLoginLogout.innerHTML = `
    <button class="btn btn-primary" type="button" data-bs-toggle="modal" onclick="borrarLocalStorage()" data-bs-target="#modalLogin""> Logout</button>
    `;

    contenidoLogin.innerHTML = `
    ¡${saludoAleatorio} ${name}!    
    `;
  } else {
    botonLoginLogout.innerHTML = `
     <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalLogin"> Login</button>
    
    `;

    contenidoLogin.innerHTML = `
    ¡${saludoAleatorio} Visitante!    
    `;
  }
}

function borrarLocalStorage() {
  localStorage.removeItem("loginPatriota");
  location.reload();
}

function fraseAzar() {
  let parrafoFraseAleatoria = document.getElementById("parrafoFraseAleatoria");
  let fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  parrafoFraseAleatoria.innerHTML = `${fraseAleatoria}`;
}

function grabarLocalStorage() {
  let loginName = document.getElementById("loginName").value;
  if (loginName.trim().length >= 1 && loginName.trim().length <= 15) {
    localStorage.setItem("loginPatriota", loginName);
    location.reload();
  } else {
    location.reload();
  }
}
