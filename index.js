import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import blog from "./model/Blog.js";

//main().catch((error) => console.error(error));

// async function main() {
//   await mongoose
//     .connect(process.env.BLOG_URI)
//     .then(console.log("Succesfully connected"));
// }

//create an instance of blog.
const blogDoc = new blog({
  title: "Awesome post",
  slug: "Awesome-post",
  publishied: true,
  content: "This is the best post ever",
  tags: ["features", "announcement"],
});

//insert the document into our mongoDB database;
blogDoc.save();

//METHODS

//1- finodone()
//findone doc
const findOne = blog.findOne({});
console.log(findOne);

//create new blog post using model.create()
const article2 = blog.create({
  title: "Article two",
  slug: "Awesome post!",
  published: true,
  content: "This is the best post ever@",
  tags: ["features", "announcement"],
});

//Note: when using model.create() method, it's automatically
//save and inserted into db. So no need to call .save().
//Also the _id is returned when logging out.

console.log("article2", article2);

mongoose
  .connect(process.env.BLOG_URI)
  .then(() => console.log("successfully connected"))
  .catch((e) => console.log("Failed to connect to mongodb"));
