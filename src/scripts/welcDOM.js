// Author: Kaleb Moran
// Purpose: Function to render welcome message to the DOM

import makeWelcome from "./welcComp.js"

function renderWelcome () {
    document.getElementById("container").innerHTML = makeWelcome();
}

export default renderWelcome