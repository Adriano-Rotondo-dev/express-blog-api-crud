const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
const postsRouter = require("./routing/posts");
const notFound = require("./middlewares/notFound")
const internalServerError = require("./middlewares/internalServerError")

app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});

//TODO: ROUTES

app.get("/", (req, res) => {
  res.send("Wecolme to the POSTS API");
});

//* define app static assets
app.use(express.static("public"));
//*define app body-parser
app.use(express.json());
//*define posts router
app.use("/posts", postsRouter);

//*Error middlewares
//error 500 
app.use(internalServerError)
//error 404
app.use(notFound)