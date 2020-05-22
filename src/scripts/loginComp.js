const loginForm = () => {
    return `
    <label>Username: </label>
    <input type="text" id="loginUsername">
    <br>
    <label>Password: </label>
    <input type="password" id="loginPassword">
    <br>
    <button id="submit">Enter</button>
    `
}

export default { loginForm }