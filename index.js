import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Blog from "./model/Blog.js";

//main().catch((error) => console.error(error));
// async function main() {
//   await mongoose
//     .connect(process.env.BLOG_URI)
//     .then(console.log("Succesfully connected"));
// }

//create an instance of blog.
const blogDoc = new Blog({
  title: "Awesome post",
  slug: "Awesome-post",
  publishied: true,
  content: "This is the best post ever",
  tags: ["features", "announcement"],
});

// //insert the document into our mongoDB database;
blogDoc.save();

//create new blog post using model.create()
// const article2 = blog.create({
//   title: "Article two",
//   slug: "Awesome post!",
//   published: true,
//   content: "This is the best post ever@",
//   tags: ["features", "announcement"],
// });
//
//Note: when using model.create() method, it's automatically
// inserted and  save  into db. So no need to call .save().
//Also the _id is returned when logging out

//console.log("article2", article2);

//METHODS

//1- finodone()
//findone doc
const findOneDoc = Blog.findOne({});

//console.log(findOneDoc);

//update title
blogDoc.title = "The most recent updated post!";

//console.log("blogDoc updated", blogDoc.findOne({}));

let docId = Blog.findById({ _id: "6560c52d298cda72950ca359" });
//console.log("id", docId);

//projecting only three fields (title, slug, content)
const projecting = Blog.findById(
  "6560c52d298cda72950ca359",
  "title, slug, content"
);
//console.log(projecting);

//delete one field
const deletedField = Blog.deleteOne({ slug: "Awesome-post" });
//console.log("deleted", deletedField);

//it's special method of mongoose

const exist = Blog.exists({ title: "Awesome post!" });
//returns null or objectId of the matching doc

// .where().equals()
//this method is similar to mongoDB's findOne()
const docWhere = Blog.where("title").equals("Awesome post!");
//console.log("docwhere", docWhere);

mongoose
  .connect(process.env.BLOG_URI)
  .then(() => console.log("successfully connected"))
  .catch((e) => console.log("Failed to connect to mongodb"));
