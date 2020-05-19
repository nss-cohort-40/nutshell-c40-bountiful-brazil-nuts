import makeWelcome from "./welcComp.js"

// FUNCTION TO RENDER WELCOME MESSAGE TO DOM
function renderWelcome () {
    document.getElementById("container").innerHTML = "";
    document.getElementById("container").innerHTML = makeWelcome();
}

export default renderWelcome