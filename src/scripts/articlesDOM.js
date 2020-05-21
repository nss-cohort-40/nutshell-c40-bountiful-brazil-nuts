// Author: Kaleb Moran
// Purpose: Functions for rendering articles components
import articlesComp from "./articlesComp.js"

const articlesDOM = {

    // FUNCTION TO RENDER ARTICLE CONTAINER
    renderArticleContainer () {
        document.getElementById("container").innerHTML = articlesComp.makeArticleContainer();
    },

    // FUNCTION TO RENDER NEW/EDIT ARTICLE FORM
    renderArticleForm () {
        document.getElementById("articleForm-container").innerHTML = articlesComp.makeArticleForm();
    },

    // FUNCTION TO RENDER ARTICLE LIST
    renderArticleList (articles) {
        document.getElementById("articleList-container").innerHTML = "";
        articles.sort((a, b) => {
            parseInt(a.timestamp);
            parseInt(b.timestamp);
            if (a.timestamp > b.timestamp) {
                return -1;
            } else if (a.timestamp < b.timestamp) {
                return 1;
            } else {
                return 0;
            }
        })
        .forEach(articleObj => {
            document.getElementById("articleList-container").innerHTML += articlesComp.makeArticleComponent(articleObj);
        })
    },

    // FUNCTION TO PRE-FILL ARTICLE FORM
    updateArticleForm (articleId) {
        const hiddenArticleId = document.getElementById("articleId");
        const articleTitle = document.getElementById("articleTitle");
        const articleSynopsis = document.getElementById("articleSynopsis");
        const articleURL = document.getElementById("articleURL");

        fetch(`http://localhost:8088/articles/${articleId}`)
        .then(response => response.json())
        .then(article => {
            hiddenArticleId.value = article.id;
            articleTitle.value = article.title;
            articleSynopsis.value = article.synopsis;
            articleURL.value = article.url;
        })
    }
}

export default articlesDOM