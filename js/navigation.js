/**
 * Muestra una pantalla de la aplicación
 *
 * @param {string} screenId - ID de la pantalla que queremos mostrar
 */
export function showScreen(screenId) {

    // Obtiene todas las pantallas de la aplicación
    const screens = document.querySelectorAll(".screen");

    // Oculta todas las pantallas
    screens.forEach((screen) => {

        //screen.hidden = true;
        screen.classList.remove("active");

    });


    // Busca la pantalla solicitada
    const targetScreen = document.getElementById(screenId);


    // Verifica que la pantalla exista
    if (!targetScreen) {

        console.error(
            `No se encontró la pantalla: ${screenId}`
        );

        return;

    }

    // Mostrar la pantalla seleccionada
    targetScreen.classList.add("active");


    // Llevar el navegador al inicio de la pantalla
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}