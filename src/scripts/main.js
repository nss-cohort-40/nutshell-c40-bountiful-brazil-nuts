import regDOM from "./regDOM.js"
import Data from "./regData.js"
import makeRegistrationForm from "./regComp.js"

regDOM.renderForm();

// EVENT LISTENER TO CREATE ACCOUNT AFTER COMPLETING REGISTRATION FORM
document.getElementById("register-account").addEventListener("click", event => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("emailAddress").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let newAccount = regDOM.createAccount(username, email, password);
    if (username !== "" && email !== "" && password !== "" && confirmPassword !== "") {
        // DO THIS IS IF ALL FORM FIELDS ARE FILLED
        Data.getAccounts()
        .then(users => {
            // MAKE USER EMAILS ARRAY
            let userEmails = users.map(user => user.email)
            if (userEmails.some((element) => element === email)) {
            //     // DO THIS IF USER EMAILS ARRAY INCLUDES EMAIL ALREADY
                window.alert("Email address already in use");
            } else {
            //     // DO THIS IF EMAIL NOT INCLUDED IN USER EMAIL ARRAY
                if (password === confirmPassword) {
            //         // DO THIS IF ALL VALIDATION PASSES
                    return Data.addNewAccount(newAccount);
                } else {
            //         // DO THIS IF PASSWORD AND CONFIRM PASSWORD DON'T MATCH
                    window.alert("Passwords do not match")
                }
            }
        })
    } else {
        // DO THIS IS IF ANY FORM FIELD IS BLANK
        window.alert("Please complete your registration")
    }
})
