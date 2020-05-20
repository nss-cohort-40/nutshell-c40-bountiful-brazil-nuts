
const Data = {
    getAccounts () {
        return fetch("http://localhost:8088/users")
        .then(response => response.json())
    },
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
