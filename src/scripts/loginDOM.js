import loginComp from "./loginComp.js"

function renderDOM () {
    document.querySelector("#loginWrapper").innerHTML += loginComp.loginForm()
}

export default { renderDOM }