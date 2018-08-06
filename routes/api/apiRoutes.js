const axios = require("axios");
const router = require("express").Router();
require("dotenv").config();
const api = process.env.apiKey
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + api;
router.get("/articles", (req, res) => {
let a = JSON.parse(req.query.query);
params = Object.keys(a).map(k => {
   return k + '=' + a[k]
 }).join('&')
 queryURL = URL +'&' +params
 console.log(queryURL)
  axios
    .get(queryURL)

    .then(results =>
   res.json(results.data.response.docs))
    
});

module.exports = router;