// Author: Kaleb Moran
// Purpose: Function to render the registration form to the DOM
import makeRegistrationForm from "./regComp.js"

function renderForm () {
    document.getElementById("container").innerHTML += makeRegistrationForm();
}

export default renderForm