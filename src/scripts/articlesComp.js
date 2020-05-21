// Author: Kaleb Moran
// Purpose: Functions to build article components

const articlesComp = {

    // NEW ARTICLE BUTTON
    makeArticleContainer () {
        return `
        <section id="articles-container">
            <h2>Articles</h2>
            <button id="newArtBtn">New Article</button>

            <div id="articleForm-container">
            </div>

            <div id="articleList-container">
            </div>
        </section>
        `
    },

    // ARTICLE COMPONENT
    makeArticleComponent (articleObj) {
        return `
        <section class="article--${articleObj.id}">
        <h2><a href="${articleObj.url}">${articleObj.title}</a></h2>
        <p>${articleObj.synopsis}</p>
        <button id="editArticle--${articleObj.id}">Edit</button>
        <button id="deleteArticle--${articleObj.id}">Delete</button>
        </section>
        `
    },

    // SAVE NEW ARTICLE FORM
    makeArticleForm () {
        return `
        <form action="">
        <input type="hidden" id="articleId" value="" />
            <fieldset>
                <label for="articleTitle">Title: </label>
                <input type="text" name="articleTitle" id="articleTitle">

                <label for="articleSynopsis">Synopsis: </label>
                <input type="text" name="articleSynopsis" id="articleSynopsis">
                
                <label for="articleURL">URL: </label>
                <input type="url" name="articleURL" id="articleURL">  
            </fieldset>
        <button id="saveArticle">Save Article</button>
        </form>
        `
    }

}

export default articlesComp