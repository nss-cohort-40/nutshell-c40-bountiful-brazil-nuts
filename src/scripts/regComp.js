// REGISTRATION FORM COMPONENT
function makeRegistrationForm () {
    return `
    <div id="registrationWrapper">
    <h1>Welcome to Nutshell</h1>
    <form action="">
      <fieldset id="registration-form">
        <label for="username">Username: </label>
        <input type="text" name="username" id="username">

        <label for="emailAddress">Email: </label>
        <input type="text" name="emailAddress" id="emailAddress">

        <label for="password">Password: </label>
        <input type="text" name="password" id="password">

        <label for="confirmPassword">Confirm Password: </label>
        <input type="text" name="confirmPassword" id="confirmPassword">
        <button id="register--account">Register</button>
      </fieldset>
    </form>
    </div>
    `
}

export default makeRegistrationForm