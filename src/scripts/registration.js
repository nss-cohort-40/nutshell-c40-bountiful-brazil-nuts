function makeRegistrationForm () {
    return `
    <form action="">
      <fieldset>
          <label for="emailAddress">Email: </label>
          <input type="text" name="emailAddress" id="emailAddress">
      </fieldset>
      <fieldset>
          <label for="username">Username: </label>
          <input type="text" name="username" id="username">
      </fieldset>
      <fieldset>
          <label for="password">Password: </label>
          <input type="text" name="password" id="password">
      </fieldset>
      <fieldset>
          <label for="confirmPassword">Confirm Password: </label>
          <input type="text" name="confirmPassword" id="confirmPassword">
      </fieldset>
      <button id="register-account">Register</button>
    </form>
    `
}