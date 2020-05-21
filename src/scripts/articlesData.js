// Author: Kaleb Moran
// Purpose: Functions for accessing and manipulating articles data


// FUNCTIONS FOR MANIPULATING USER DATA
const articlesData = {

    // CREATE ARTICLE OBJECT
    createArticleObj: function (title, synopsis, url) {
       return { 
            timestamp: Date.now(),
            title: title,
            synopsis: synopsis,
            url: url
       }
    },

    // FETCH ALL ARTICLES
    getArticles () {
        return fetch("http://localhost:8088/articles")
        .then(response => response.json())
    },

    // FETCH SPECIFIC ARTICLE
    getArticle (articleId) {
        return fetch(`http://localhost:8088/articles/${articleId}`)
        .then(response => response.json())
    },

    // ADD NEW ARTICLE TO DATABASE
    addNewArticle (articleObj) {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObj)
        })
        .then( articles => {
            return this.getArticles(articles)
        })
    },

    // EDIT ARTICLE IN DATABASE
    editArticle (articleObj, title, synopsis, url) {
        const updatedArticleObj = {
            timestamp: articleObj.timestamp,
            title,
            synopsis,
            url
        }
        return fetch(`http://localhost:8088/articles/${articleObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedArticleObj)
        }).then(response => response.json())
    },

    // DELETE ARTICLE IN DATABASE
    deleteArticle(articleId) {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }
}

export default articlesData