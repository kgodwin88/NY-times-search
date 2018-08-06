import axios from "axios";

// The getArticles method retrieves articles from the server
// It accepts a "query" or term to search the NY Times api for articles
export default {
  getArticles: function(query) {
    return axios.get("/api/articles", { params: { query } } );
     },
      // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/articles", articleData);
  }
};
