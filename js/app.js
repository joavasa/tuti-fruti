import { showScreen } from "./navigation.js";


// =========================================
// ELEMENTOS DEL DOM
// =========================================

const playerNameInput = document.getElementById("player-name");

const playButton = document.getElementById("play-button");

const nameError = document.getElementById("name-error");

const backHomeButton = document.getElementById("back-home-button");


// =========================================
// INICIALIZACIÓN
// =========================================

function initializeApp() {

    console.log("Tutti Frutti iniciado");

    // Mostramos la pantalla inicial
    showScreen("screen-home");

    // Configuramos los eventos
    setupEventListeners();

}


// =========================================
// EVENTOS
// =========================================

function setupEventListeners() {

    // Evento del botón JUGAR
    playButton.addEventListener(
        "click",
        handlePlay
    );


    // Permite presionar Enter dentro del campo
    playerNameInput.addEventListener(
        "keydown",
        handleNameKeyDown
    );


    // Botón para volver a Inicio
    backHomeButton.addEventListener(
        "click",
        handleBackHome
    );

}


// =========================================
// ACCIÓN: JUGAR
// =========================================

function handlePlay() {

    console.log("Se presionó JUGAR");


    const playerName = playerNameInput.value.trim();


    // Limpiamos mensaje anterior
    nameError.textContent = "";


    // Validamos el nombre
    if (playerName === "") {

        nameError.textContent =
            "Debes ingresar tu nombre.";

        playerNameInput.focus();

        return;

    }


    // Guardamos temporalmente el nombre
    localStorage.setItem(
        "playerName",
        playerName
    );


    console.log(
        `Jugador: ${playerName}`
    );

    console.log("Voy a mostrar pantalla 2");

    // Pasamos temporalmente a la pantalla 2
    showScreen("screen-game-mode");

}


// =========================================
// ENTER EN EL CAMPO
// =========================================

function handleNameKeyDown(event) {

    if (event.key === "Enter") {

        handlePlay();

    }

}


// =========================================
// VOLVER AL INICIO
// =========================================

function handleBackHome() {

    showScreen("screen-home");

    playerNameInput.focus();

}


// =========================================
// INICIAR APLICACIÓN
// =========================================

initializeApp();