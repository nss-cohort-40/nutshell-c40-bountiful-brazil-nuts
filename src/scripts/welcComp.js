// Author: Kaleb Moran
// Purpose: HTML component for registration form

// WELCOME MESSAGE COMPONENT
function makeWelcome() {
    return `
    <div id="welcomeWrapper">
    <h1>Welcome to Nutshell</h1>
    <button id="populate--regForm">Register a new account</button>
    <button id="login">Login</button>
    <div id="loginWrapper"></div>
    </div>
    `
}

export default makeWelcome