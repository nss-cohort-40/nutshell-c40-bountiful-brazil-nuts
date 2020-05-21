import makeRegistrationForm from "./regComp.js"

// FUNCTION TO RENDER REGISTRATION FORM TO DOM
function renderForm () {
    document.getElementById("container").innerHTML += makeRegistrationForm();
}

export default renderForm