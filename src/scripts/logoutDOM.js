// Author: Kaleb Moran
// Purpose: Function to render logout button
import makeLogoutButton from "./logoutComp.js"

// LOG OUT BUTTON
function renderLogoutButton () {
    document.getElementById("container").innerHTML += makeLogoutButton();
}

export default renderLogoutButton