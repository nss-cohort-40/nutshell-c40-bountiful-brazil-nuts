// Author: Kaleb Moran
// Purpose: Functions for manipulating user data

const Data = {
    // CREATES A USER ACCOUNT OBJECT
    createAccountObj: function (username, email, password) {
       return { 
            username: username,
            email: email,
            password: password
       }
    },
    // FETCHES ALL ACCOUNT OBJECTS
    getAccounts () {
        return fetch("http://localhost:8088/users")
        .then(response => response.json())
    },
    // POSTS A NEW ACCOUNT OBJECT
    addNewAccount (newAccount) {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAccount)
        })
    }
}

export default Data
