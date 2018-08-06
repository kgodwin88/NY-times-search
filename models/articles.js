const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String},
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Articles = mongoose.model("nytreact", articleSchema);

module.exports = Articles;