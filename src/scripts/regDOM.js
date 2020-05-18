import makeRegistrationForm from "./regComp.js"

// FUNCTION TO RENDER REGISTRATION FORM TO DOM
function renderForm () {
    document.getElementById("container").innerHTML = "";
    document.getElementById("container").innerHTML += makeRegistrationForm();
}

// OBJECT CONTAINING ACCOUNT INFORMATION FOR DATABASE
const createAccount = (username, email) => ({
    username: username,
    email: email,
})

export default {renderForm, createAccount}