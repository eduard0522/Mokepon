const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const btnMascotaJugador = document.getElementById("btn-mascota");
const botonReiniciar = document.getElementById("btn-reiniciar");

const sectionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);
const spanJugador = document.getElementById("mascota-jugador");

const spanEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

const contenedorAtaques = document.getElementById("contenedor-ataques");

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let mokepones = [];
let ataqueJugador;
let ataqueEnemigo = [];
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let mascotaJugadorObjeto;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let ataquesMokepon;
let ataquesMokeponEnemigo;
let inputLangostelvis;
let resultado;
let ataquesJugador = [];
let indexAtaqueJugador;
let indexAtaqueEnemgigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 5;
let vidasEnemigo = 5;
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = "./img/fondo.jpg";
let alturaBuscada
let anchoDelMapa=window.innerWidth -20
const anchoMaxMapa=600


if (anchoDelMapa > anchoMaxMapa) {
  anchoDelMapa=anchoMaxMapa - 20
}

alturaBuscada=anchoDelMapa*600/800
mapa.width=anchoDelMapa
mapa.height=alturaBuscada

class Mokepon {
  constructor(nombre, foto, vida, fotoMapa, x = 50, y = 200) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.ancho = 60;
    this.alto = 60;
    this.x = aleatorio(0,mapa.width - this.ancho)
    this.y = aleatorio(0,mapa.height -this.alto);
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }

  pintarMokepon() {
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}

let hipodoge = new Mokepon(
  "Hipodoge",
  "./img/hipodoge.png",
  "5",
  "./img/hipodoge.png"
);
let capipepo = new Mokepon(
  "Capipepo",
  "./img/capipepo.png",
  "5",
  "./img/capipepo.png"
);
let ratigueya = new Mokepon(
  "Ratigueya",
  "./img/ratigueya.png",
  "5",
  "./img/ratigueya.png"
);
let langostelvis = new Mokepon(
  "Langostelvis",
  "./img/langostelvis.png",
  "5",
  "./img/langostelvis.png"
);

let hipodogeEnemigo = new Mokepon(
  "Hipodoge",
  "./img/hipodoge.png",
  "5",
  "./img/hipodoge.png"
  
);
let capipepoEnemigo = new Mokepon(
  "Capipepo",
  "./img/capipepo.png",
  "5",
  "./img/capipepo.png"
  
);
let ratigueyaEnemigo = new Mokepon(
  "Ratigueya",
  "./img/ratigueya.png",
  "5",
  "./img/ratigueya.png"
 
);
let langostelvisEnemigo = new Mokepon(
  "Langostelvis",
  "./img/langostelvis.png",
  "5",
  "./img/langostelvis.png"

);

hipodoge.ataques.push(
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🌴", id: "btn-tierra" }
);

hipodogeEnemigo.ataques.push(
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🌴", id: "btn-tierra" }
);

capipepo.ataques.push(
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🌴", id: "btn-tierra" }
);

capipepoEnemigo.ataques.push(
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🌴", id: "btn-tierra" }
);

ratigueya.ataques.push(
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "💧", id: "btn-agua" }
);

ratigueyaEnemigo.ataques.push(
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "🌴", id: "btn-tierra" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "💧", id: "btn-agua" }
);

langostelvis.ataques.push(
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🌴", id: "btn-tierra" }
);

langostelvisEnemigo.ataques.push(
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "💧", id: "btn-agua" },
  { nombre: "🔥", id: "btn-fuego" },
  { nombre: "🌴", id: "btn-tierra" }
);

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis);

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionVerMapa.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = ` <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label for="${mokepon.nombre}" class="tarjeta-de-mokepon"> 
           <p>${mokepon.nombre}</p> 
           <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`;
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
    inputLangostelvis = document.getElementById("Langostelvis");
  });

  sectionReiniciar.style.display = "none";
  btnMascotaJugador.addEventListener("click", selecionarMascotaJugador);
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function selecionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";

  if (inputHipodoge.checked) {
    spanJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    spanJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
  } else if (inputLangostelvis.checked) {
    spanJugador.innerHTML = inputLangostelvis.id;
    mascotaJugador = inputLangostelvis.id;
  } else {
    alert("Upps! No has seleccionado ninguna mascota.");
    location.reload();
  }
  extraerAtaques(mascotaJugador);
  sectionVerMapa.style.display='flex' 
  iniciarMapa();
  
}
function seleccionarMascotaEnemigo(enemigo) {
  spanEnemigo.innerHTML = enemigo.nombre
  ataquesMokeponEnemigo = enemigo.ataques
  secuenciaAtaque();

}

function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador == mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
        <button id=${ataque.id} class="btn-ataque Bataque">${ataque.nombre}</button>
        `;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });
  botonFuego = document.getElementById("btn-fuego");
  botonAgua = document.getElementById("btn-agua");
  botonTierra = document.getElementById("btn-tierra");
  botones = document.querySelectorAll(".Bataque");
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        ataquesJugador.push("FUEGO");
        console.log(ataquesJugador);
        boton.style.background = "#041c1d";
        boton.disabled = true;
      } else if (e.target.textContent === "💧") {
        ataquesJugador.push("AGUA");
        console.log(ataquesJugador);
        boton.style.background = "#041c1d";
        boton.disabled = true;
      } else {
        ataquesJugador.push("TIERRA");
        console.log(ataquesJugador);
        boton.style.background = "#041c1d";
        boton.disabled = true;
      }
      ataqueAleatorioEnemigo();
    });
  });
}

// selecciona una mascota aleatoriamente

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO");
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    ataqueEnemigo.push("AGUA");
  } else {
    ataqueEnemigo.push("TIERRA");
  }

  console.log(ataqueEnemigo);
  iniciarPelea();
}

function iniciarPelea() {
  if (ataquesJugador.length == 5) {
    combate();
  }
}
function indexOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataquesJugador[jugador];
  indexAtaqueEnemgigo = ataqueEnemigo[enemigo];
}

function combate() {
  for (let index = 0; index < ataquesJugador.length; index++) {
    if (ataquesJugador[index] === ataqueEnemigo[index]) {
      indexOponentes(index, index);
      resultado = "EMPATE";
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataquesJugador[index] === "FUEGO" &&
      ataqueEnemigo[index] === "TIERRA"
    ) {
      indexOponentes(index, index);
      resultado = "GANASTE";
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataquesJugador[index] === "AGUA" &&
      ataqueEnemigo[index] === "FUEGO"
    ) {
      indexOponentes(index, index);
      resultado = "GANASTE";
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataquesJugador[index] === "TIERRA" &&
      ataqueEnemigo[index] === "AGUA"
    ) {
      indexOponentes(index, index);
      resultado = "GANASTE";
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexOponentes(index, index);
      resultado = "PERDISTE";
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
    crearMensaje();
  }

  revisarVidas();
}
function revisarVidas() {
  if (victoriasJugador == victoriasEnemigo) {
    crearMensajeFinal("EMPATE!!");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("🎉 Felicidades, Ganaste 🎉");
  } else {
    crearMensajeFinal("😣Has perdido!!😣");
  }
}

function crearMensaje() {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemgigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;
  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarCanvas() {
  mascotaJugadorObjeto.x =
    mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y =
    mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
  lienzo.clearRect(0, 0, mapa.clientWidth, mapa.height);

  lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
  mascotaJugadorObjeto.pintarMokepon();
  hipodogeEnemigo.pintarMokepon();
  capipepoEnemigo.pintarMokepon();
  langostelvisEnemigo.pintarMokepon();
  ratigueyaEnemigo.pintarMokepon();

  if (
    mascotaJugadorObjeto.velocidadX !== 0 ||
    mascotaJugadorObjeto.velocidadY !== 0
  ) {
    revisarColision(hipodogeEnemigo);
    revisarColision(capipepoEnemigo);
    revisarColision(langostelvisEnemigo);
    revisarColision(ratigueyaEnemigo);
  }
}

function moverArriba() {
  mascotaJugadorObjeto.velocidadY = -5;
}
function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}
function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}
function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}

function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
  switch (event.key) {
    case "ArrowUp":
      moverArriba();
      break;
    case "ArrowDown":
      moverAbajo();
      break;
    case "ArrowLeft":
      moverIzquierda();
      break;
    case "ArrowRight":
      moverDerecha();
      break;
    default:
      break;
  }
}

function iniciarMapa() {

  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
  sectionVerMapa.style.display = "flex";
  intervalo = setInterval(pintarCanvas, 30);
  window.addEventListener("keydown", sePresionoUnaTecla);
  window.addEventListener("keyup", detenerMovimiento);
}
function obtenerObjetoMascota() {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador == mokepones[i].nombre) {
      return mokepones[i];
    }
  }
}

function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y + 30;
  const abajoEnemigo = enemigo.y - 30 + enemigo.alto;
  const derechaEnemigo = enemigo.x - 30 + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x + 30

  const arribaMascota = mascotaJugadorObjeto.y
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
  const izquierdaMascota = mascotaJugadorObjeto.x;

  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return;
  }

  detenerMovimiento();
  clearInterval(intervalo)
  sectionSeleccionarAtaque.style.display= "flex"
  sectionVerMapa.style.display="none"
  seleccionarMascotaEnemigo(enemigo)
 
}

window.addEventListener("load", iniciarJuego);
